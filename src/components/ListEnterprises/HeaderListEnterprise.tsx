import { TableCell, TableHead, TableRow } from "@mui/material";

export const HeaderListEnterpriseComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Commercial Name</TableCell>
        <TableCell align="right">Description</TableCell>
        <TableCell align="right">Inserted At</TableCell>
        <TableCell align="right">Updated At</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
