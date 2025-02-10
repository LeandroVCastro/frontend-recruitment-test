import { TableBody, TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEnterprisesStore } from "../../states/enterprisesState";
import { useState } from "react";
import { EnterpriseFormComponent } from "../EnterpriseForm/EnterpriseForm";
import { ConfirmDialogComponent } from "../ConfirmDialog/ConfirmDialog";
import {
  useDeleteEnterpriseMutation,
  useListEnterprisesQuery,
} from "../../generated/graphql";
import { enqueueSnackbar } from "notistack";
import { formatGraphQLErrors } from "../../helpers/formatGraphQLErrors";
import { ApolloError } from "@apollo/client";
import moment from "moment";

export const BodyListEnterpriseComponent = () => {
  const { enterprisesList } = useEnterprisesStore();
  const [showFormEditEnterprise, setShowFormEditEnterprise] = useState(false);
  const [showConfirmDialogDelete, setShowConfirmDialogDelete] = useState(false);
  const [deleteEnterpriseFetch, {}] = useDeleteEnterpriseMutation();
  const { refetch: listEnterprisesFetch } = useListEnterprisesQuery({
    variables: {
      offset: 0,
      limit: 10,
    },
    fetchPolicy: "standby",
  });

  const [id, setId] = useState<string | undefined>(undefined);

  const editEnterprise = () => {
    setShowFormEditEnterprise(true);
  };

  const deleteEnterprise = async (ok: boolean) => {
    setShowConfirmDialogDelete(false);
    if (!ok) return;
    try {
      await deleteEnterpriseFetch({ variables: { id: id! } });
      await listEnterprisesFetch();
    } catch (requestError) {
      const errors = await formatGraphQLErrors(requestError as ApolloError);
      for (let message of errors) {
        enqueueSnackbar(message, {
          variant: "error",
        });
      }
    }
  };

  return (
    <>
      <TableBody>
        {enterprisesList.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.commercialName}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.cnpj}</TableCell>
            <TableCell align="right">
              {moment(row.insertedAt).format("DD/MM/YYYY HH:mm:ss")}
            </TableCell>
            <TableCell align="right">
              {moment(row.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
            </TableCell>
            <TableCell align="right">
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  setId(row.id!);
                  setShowConfirmDialogDelete(true);
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="edit"
                onClick={() => {
                  editEnterprise();
                  setId(row.id!);
                }}
              >
                <SettingsIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <EnterpriseFormComponent
        id={id}
        open={showFormEditEnterprise}
        handleClose={() => {
          setShowFormEditEnterprise(false);
          setId(undefined);
        }}
      />
      <ConfirmDialogComponent
        open={showConfirmDialogDelete}
        onClose={deleteEnterprise}
      />
    </>
  );
};
