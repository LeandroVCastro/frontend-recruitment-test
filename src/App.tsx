import "./App.css";
import Button from "@mui/material/Button";
import { ListEnterprisesComponent } from "./components/ListEnterprises/ListEnterprises";
import { Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { EnterpriseFormComponent } from "./components/EnterpriseForm/EnterpriseForm";

const App = () => {
  const [showModalNewEnterprise, setShowModalNewEnterprise] = useState(false);
  return (
    <Paper className={`my-8`}>
      <Grid
        container
        direction={"row"}
        justifyContent={`space-between`}
        className="px-4 py-8"
      >
        <Typography variant="h4" color="primary" className="font-bold">
          Enterprise Manager
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          onClick={() => setShowModalNewEnterprise(true)}
        >
          New Enterprise
        </Button>
      </Grid>
      <Divider />
      <ListEnterprisesComponent />
      <EnterpriseFormComponent
        open={showModalNewEnterprise}
        handleClose={() => {
          setShowModalNewEnterprise(false);
        }}
      />
    </Paper>
  );
};

export default App;
