import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { HeaderListEnterpriseComponent } from "./HeaderListEnterprise";
import { BodyListEnterpriseComponent } from "./BodyListEnterprise";
import { useEnterprisesStore } from "../../states/enterprisesState";
import { useEffect } from "react";
import {
  EnterpriseDefault,
  useListEnterprisesQuery,
} from "../../generated/graphql";
import { LoadingComponent } from "../Loading/Loading";
import { EmptyStateComponent } from "../EmptyState/EmptyState";

export const ListEnterprisesComponent = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalEnterprises, setTotalEnterprises] = useState(10);

  const { data, loading, error } = useListEnterprisesQuery({
    variables: {
      offset: page * limit,
      limit: limit,
    },
  });

  const { enterprisesList, setEnterprisesList } = useEnterprisesStore();

  useEffect(() => {
    if (data?.listEnterprises?.items) {
      setEnterprisesList(data.listEnterprises.items as EnterpriseDefault[]);
    }
    setTotalEnterprises(data?.getTotalEnterprises ?? 0);
  }, [data]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table size="small" className="w-full" aria-label="Enterprises Table">
          <HeaderListEnterpriseComponent />
          {loading && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={7}>
                  <LoadingComponent className="py-8" />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
          {!loading && <BodyListEnterpriseComponent />}
          {!loading && enterprisesList.length === 0 && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={7}>
                  <EmptyStateComponent className="py-8" />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalEnterprises}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={limit}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
