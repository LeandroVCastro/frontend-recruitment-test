import { TableBody, TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEnterprisesStore } from "../../states/enterprisesState";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Ice", 0, 0, 0, 0),
];

export const BodyListEnterpriseComponent = () => {
  const { enterprisesList } = useEnterprisesStore();

  return (
    <TableBody>
      {enterprisesList.map((row) => (
        <TableRow
          key={row.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.commercialName}</TableCell>
          <TableCell align="right">{row.description}</TableCell>
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
