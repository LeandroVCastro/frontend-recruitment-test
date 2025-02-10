import { Button, DialogActions } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import {
  RootMutationTypeCreateEnterpriseArgs,
  useCreateEnterpriseMutation,
  useListEnterprisesQuery,
  useUpdateEnterpriseMutation,
} from "../../generated/graphql";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { ApolloError } from "@apollo/client";
import { formatGraphQLErrors } from "../../helpers/formatGraphQLErrors";
import { forwardRef, useImperativeHandle } from "react";

type ActionsEnterpriseFormProps = {
  close: () => void;
};

export const ActionsEnterpriseForm = (props: ActionsEnterpriseFormProps) => {
  return (
    <DialogActions>
      <Button onClick={props.close}>Cancel</Button>
      <Button type="submit" variant={`contained`}>
        Save
      </Button>
    </DialogActions>
  );
};
