import { TableBody, TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEnterprisesStore } from "../../states/enterprisesState";

export const BodyListEnterpriseComponent = () => {
  const { enterprisesList } = useEnterprisesStore();

  return (
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
            <IconButton aria-label="edit">
              <SettingsIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
