import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import {
  RootMutationTypeCreateEnterpriseArgs,
  useCreateEnterpriseMutation,
  useGetEnterpriseQuery,
  useListEnterprisesQuery,
  useUpdateEnterpriseMutation,
} from "../../generated/graphql";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ApolloError } from "@apollo/client";
import { useSnackbar } from "notistack";
import { formatGraphQLErrors } from "../../helpers/formatGraphQLErrors";
import Skeleton from "@mui/material/Skeleton";

type EnterpriseFormProps = {
  open: boolean;
  handleClose: () => void;
  id?: string;
};

export const EnterpriseFormComponent = (props: EnterpriseFormProps) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm<RootMutationTypeCreateEnterpriseArgs>();

  const [createEnterprise, {}] = useCreateEnterpriseMutation();
  const [updateEnterprise, {}] = useUpdateEnterpriseMutation();

  const { refetch } = useListEnterprisesQuery({
    variables: {
      offset: 0,
      limit: 10,
    },
    initialFetchPolicy: "standby",
  });

  const {
    data: dataGetEnterprise,
    loading,
    refetch: fetchEnterprise,
  } = useGetEnterpriseQuery({
    variables: { id: props.id! },
    fetchPolicy: "standby",
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container direction={"column"} gap={2}>
            {!loading ? (
              <>
                <FormControl
                  variant={"standard"}
                  {...(errors.name && { error: true })}
                >
                  <InputLabel htmlFor="component-helper-name">Name</InputLabel>
                  <Input
                    id="component-helper-name"
                    aria-describedby="component-helper-text-name"
                    {...register("name", { required: "Required Field" })}
                  />
                  {errors.name && (
                    <FormHelperText id="component-helper-text-name">
                      {errors.name.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  variant={"standard"}
                  {...(errors.commercialName && { error: true })}
                >
                  <InputLabel htmlFor="component-helper">
                    Commercial Name
                  </InputLabel>
                  <Input
                    id="component-helper"
                    aria-describedby="component-helper-text"
                    {...register("commercialName", {
                      required: "Required Field",
                    })}
                  />
                  {errors.commercialName && (
                    <FormHelperText id="component-helper-text">
                      {errors.commercialName.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  variant={"standard"}
                  {...(errors.cnpj && { error: true })}
                >
                  <InputLabel htmlFor="component-helper-cnpj">CNPJ</InputLabel>
                  <Input
                    id="component-helper-cnpj"
                    aria-describedby="component-helper-text-cnpj"
                    {...register("cnpj", { required: "Required Field" })}
                  />
                  {errors.cnpj && (
                    <FormHelperText id="component-helper-text-cnpj">
                      {errors.cnpj.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  variant={"standard"}
                  {...(errors.description && { error: true })}
                >
                  <InputLabel htmlFor="component-helper-description">
                    Description
                  </InputLabel>
                  <Input
                    multiline
                    rows={5}
                    id="component-helper-description"
                    aria-describedby="component-helper-text-description"
                    {...register("description", { required: "Required Field" })}
                  />
                  {errors.description && (
                    <FormHelperText id="component-helper-text-description">
                      {errors.description.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </>
            ) : (
              <>
                <Skeleton
                  variant="rectangular"
                  className="w-full"
                  height={48}
                />
                <Skeleton
                  variant="rectangular"
                  className="w-full"
                  height={48}
                />
                <Skeleton
                  variant="rectangular"
                  className="w-full"
                  height={48}
                />
                <Skeleton
                  variant="rectangular"
                  className="w-full"
                  height={140}
                />
              </>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button type="submit" variant={`contained`}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
