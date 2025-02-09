import { TableCell, TableHead, TableRow, TableBody } from "@mui/material";

export const HeaderListEnterpriseComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Commercial Name</TableCell>
        <TableCell align="right">Description</TableCell>
        <TableCell align="right">CNPJ</TableCell>
        <TableCell align="right">Inserted At</TableCell>
        <TableCell align="right">Updated At</TableCell>
        <TableCell align="right" width={"150"}>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
