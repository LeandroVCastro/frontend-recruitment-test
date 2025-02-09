import "./App.css";
import Button from "@mui/material/Button";
import { ListEnterprisesComponent } from "./components/ListEnterprises/ListEnterprises";
import { Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  return (
    <Paper className={`my-8`}>
      <Grid
        container
        direction={"row"}
        justifyContent={`space-between`}
        className="px-4 py-8"
      >
        <Typography variant="h4">Enterprise Manager</Typography>
        <Button variant="contained" startIcon={<AddIcon />} color="primary">
          New Enterprise
        </Button>
      </Grid>
      <Divider />
      <ListEnterprisesComponent />
    </Paper>
  );
};

export default App;
