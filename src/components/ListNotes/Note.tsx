import {
  Button,
  Divider,
  FilledInput,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import {
  NotesDefault,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useGetEnterpriseQuery,
  useUpdateNoteMutation,
} from "../../generated/graphql";
import { ApolloError } from "@apollo/client";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { formatGraphQLErrors } from "../../helpers/formatGraphQLErrors";
import { LoadingComponent } from "../Loading/Loading";
import { useEnterprisesStore } from "../../states/enterprisesState";
import { ConfirmDialogComponent } from "../ConfirmDialog/ConfirmDialog";

type NoteComponentProps = {
  note: NotesDefault;
  enterpriseId: string;
};

export const NoteComponent = (props: NoteComponentProps) => {
  const [note, setNote] = useState(props.note);
  const { setNotes } = useEnterprisesStore();
  const [createNote, { loading }] = useCreateNoteMutation();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [updateNote, { loading: loadingUpdate }] = useUpdateNoteMutation();
  const { refetch: getEnterprise } = useGetEnterpriseQuery({
    variables: { id: note.enterpriseId! },
    initialFetchPolicy: "standby",
    nextFetchPolicy: "no-cache",
  });
  const [deleteNote, { loading: loadingDeleteNote }] = useDeleteNoteMutation();

  const save = async () => {
    closeSnackbar();
    try {
      if (!note.id) {
        await createNote({
          variables: {
            enterpriseId: note.enterpriseId!,
            note: note.note!,
          },
        });
      } else {
        await updateNote({
          variables: {
            id: note.id,
            note: note.note!,
          },
        });
      }
      const responseGetEnterprise = await getEnterprise({
        id: props.enterpriseId,
      });
      setNotes(
        responseGetEnterprise.data.getEnterprise?.notes as NotesDefault[]
      );
      enqueueSnackbar("Success", {
        variant: "success",
      });
    } catch (requestError: ApolloError | any) {
      const errors = await formatGraphQLErrors(requestError as ApolloError);
      for (let message of errors) {
        enqueueSnackbar(message, {
          variant: "error",
        });
      }
    }
  };

  const changeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNote({ ...note, note: event.target.value ?? "" });
  };

  const remove = async (ok: boolean) => {
    setShowConfirmationDialog(false);
    if (ok) {
      try {
        await deleteNote({ variables: { id: note.id! } });
        const responseGetEnterprise = await getEnterprise({
          id: props.enterpriseId,
        });
        setNotes(
          responseGetEnterprise.data.getEnterprise?.notes as NotesDefault[]
        );
        enqueueSnackbar("Success", {
          variant: "success",
        });
      } catch (requestError: ApolloError | any) {
        const errors = await formatGraphQLErrors(requestError as ApolloError);
        for (let message of errors) {
          enqueueSnackbar(message, {
            variant: "error",
          });
        }
      }
    }
  };

  if (loadingDeleteNote) return <LoadingComponent />;

  return (
    <>
      {!loading && !loadingUpdate ? (
        <FormControl variant={"standard"} fullWidth>
          <FilledInput
            multiline
            rows={5}
            id="note-text-field"
            aria-describedby="note-text-field-helper"
            placeholder="Note"
            value={note.note ?? ""}
            onChange={changeHandler}
          />
          {(!note.note || note.note === "") && (
            <FormHelperText id="note-text-field-helper">
              Required Field
            </FormHelperText>
          )}
        </FormControl>
      ) : (
        <LoadingComponent />
      )}
      <Grid
        container
        direction={"row"}
        justifyContent={`end`}
        gap={1}
        className={`mt-4`}
      >
        <Button
          color="error"
          disabled={!note.id || loading || loadingUpdate}
          onClick={() => setShowConfirmationDialog(true)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          disabled={!note.note || note.note === "" || loading || loadingUpdate}
          onClick={save}
        >
          Save Note
        </Button>
      </Grid>
      <Divider className={`w-full my-4 `} />
      <ConfirmDialogComponent open={showConfirmationDialog} onClose={remove} />
    </>
  );
};
