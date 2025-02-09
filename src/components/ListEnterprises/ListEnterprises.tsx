import { Table } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";

import { HeaderListEnterpriseComponent } from "./HeaderListEnterprise";
import { BodyListEnterpriseComponent } from "./BodyListEnterprise";

export const ListEnterprisesComponent = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="Enterprises Table">
        <HeaderListEnterpriseComponent />
        <BodyListEnterpriseComponent />
      </Table>
      <TablePagination
        component="div"
        count={200}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
