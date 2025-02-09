import "./App.css";
import { useListEnterprisesQuery } from "./generated/graphql";
import Button from "@mui/material/Button";
import { ListEnterprisesComponent } from "./components/ListEnterprises/ListEnterprises";
import { Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import { useEnterprisesStore } from "./states/enterprisesState";
import { useEffect } from "react";

const App = () => {
  const { data, loading, error } = useListEnterprisesQuery({
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const { setEnterprisesList } = useEnterprisesStore();

  useEffect(() => {
    if (data?.listEnterprises?.items) {
      setEnterprisesList(data.listEnterprises.items);
    }
  }, [data]);

  return (
    <Paper className={`mt-8`}>
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
