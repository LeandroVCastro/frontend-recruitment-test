import { TableBody, TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEnterprisesStore } from "../../states/enterprisesState";
import { useState } from "react";
import { EnterpriseFormComponent } from "../EnterpriseForm/EnterpriseForm";

export const BodyListEnterpriseComponent = () => {
  const { enterprisesList } = useEnterprisesStore();
  const [showFormEditEnterprise, setShowFormEditEnterprise] = useState(false);
  const [id, setId] = useState<string | undefined>(undefined);

  const editEnterprise = () => {
    setShowFormEditEnterprise(true);
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
            <TableCell align="right">{row.insertedAt}</TableCell>
            <TableCell align="right">{row.updatedAt}</TableCell>
            <TableCell align="right">
              <IconButton aria-label="delete" color="error">
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
    </>
  );
};
