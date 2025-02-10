import { TableCell, TableHead, TableRow, TableBody } from "@mui/material";

export const HeaderListEnterpriseComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Commercial Name</TableCell>
        <TableCell align="right">Description</TableCell>
        <TableCell align="right">CNPJ</TableCell>
        <TableCell align="right" width={"140"}>
          Inserted At
        </TableCell>
        <TableCell align="right" width={"140"}>
          Updated At
        </TableCell>
        <TableCell align="right" width={"150"}>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
