import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import {
  NotesDefault,
  RootMutationTypeCreateEnterpriseArgs,
  useCreateEnterpriseMutation,
  useGetEnterpriseQuery,
  useListEnterprisesQuery,
  useUpdateEnterpriseMutation,
} from "../../generated/graphql";
import { ApolloError } from "@apollo/client";
import { useSnackbar } from "notistack";
import { formatGraphQLErrors } from "../../helpers/formatGraphQLErrors";
import { InputNameEnterpriseFormComponent } from "./InputName";
import { InputCommercialNameEnterpriseFormComponent } from "./InputCommercialName";
import { InputCnpjEnterpriseFormComponent } from "./InputCnpj";
import { InputDescriptionEnterpriseFormComponent } from "./InputDescription";
import { ActionsEnterpriseForm } from "./ActionsEnterpriseForm";
import { LoadingComponent } from "../Loading/Loading";
import { ListNotesComponent } from "../ListNotes/ListNotes";
import { useEnterprisesStore } from "../../states/enterprisesState";

type EnterpriseFormProps = {
  open: boolean;
  handleClose: () => void;
  id?: string;
};

export const EnterpriseFormComponent = (props: EnterpriseFormProps) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { setNotes } = useEnterprisesStore();
  const methods = useForm<RootMutationTypeCreateEnterpriseArgs>();
  const { handleSubmit, setValue, reset } = methods;

  const [createEnterprise, { loading: loadingCreate }] =
    useCreateEnterpriseMutation();
  const [updateEnterprise, { loading: loadingUpdate }] =
    useUpdateEnterpriseMutation();

  const { refetch } = useListEnterprisesQuery({
    variables: {
      offset: 0,
      limit: 10,
    },
    initialFetchPolicy: "standby",
    nextFetchPolicy: "no-cache",
  });

  const { loading, refetch: fetchEnterprise } = useGetEnterpriseQuery({
    variables: { id: props.id! },
    initialFetchPolicy: "standby",
    nextFetchPolicy: "no-cache",
  });

  React.useEffect(() => {
    (async () => {
      if (props.id) {
        try {
          const response = await fetchEnterprise({
            id: props.id,
          });
          if (!response.data.getEnterprise) return;
          setValue("name", response.data.getEnterprise.name!);
          setValue(
            "commercialName",
            response.data.getEnterprise.commercialName!
          );
          setValue("cnpj", response.data.getEnterprise.cnpj!);
          setValue("description", response.data.getEnterprise.description!);
          setNotes((response.data.getEnterprise.notes as NotesDefault[]) ?? []);
        } catch (requestError) {
          const errors = await formatGraphQLErrors(requestError as ApolloError);
          for (let message of errors) {
            enqueueSnackbar(message, {
              variant: "error",
            });
          }
        }
      }
    })();
  }, [props.id]);

  const close = () => {
    reset();
    props.handleClose();
  };

  const onSubmit: SubmitHandler<RootMutationTypeCreateEnterpriseArgs> = async (
    data
  ) => {
    closeSnackbar();
    try {
      if (!props.id) {
        await createEnterprise({
          variables: {
            name: data.name,
            commercialName: data.commercialName,
            cnpj: data.cnpj,
            description: data.description,
          },
        });
      }
      if (props.id) {
        await updateEnterprise({
          variables: {
            id: props.id,
            name: data.name,
            commercialName: data.commercialName,
            cnpj: data.cnpj,
            description: data.description,
          },
        });
      }
      enqueueSnackbar("Success", { variant: "success" });
      refetch();
      close();
    } catch (requestError: ApolloError | any) {
      const errors = await formatGraphQLErrors(requestError as ApolloError);
      for (let message of errors) {
        enqueueSnackbar(message, {
          variant: "error",
        });
      }
    }
  };

  return (
    <Dialog open={props.open} maxWidth="sm" fullWidth={true} onClose={close}>
      <DialogTitle color="primary">Enterprise</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container direction={"column"} gap={2}>
              {!loading && !loadingCreate && !loadingUpdate ? (
                <>
                  <InputNameEnterpriseFormComponent />
                  <InputCommercialNameEnterpriseFormComponent />
                  <InputCnpjEnterpriseFormComponent />
                  <InputDescriptionEnterpriseFormComponent />
                  {props.id && <ListNotesComponent enterpriseId={props.id} />}
                </>
              ) : (
                <LoadingComponent />
              )}
            </Grid>
          </DialogContent>
          <ActionsEnterpriseForm
            close={close}
            loading={loading || loadingCreate || loadingUpdate}
          />
        </form>
      </FormProvider>
    </Dialog>
  );
};
