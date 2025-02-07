import React from "react";

import logo from "./logo.svg";
import "./App.css";

import { useHelloWorldQuery } from "./generated/graphql";
import Button from "@mui/material/Button";
import { ListEnterprisesComponent } from "./components/ListEnterprises/ListEnterprises";
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const { data, loading } = useHelloWorldQuery();

  return (
    <Box>
      <Grid container direction={"row-reverse"}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          className={`my-4`}
        >
          New Enterprise
        </Button>
      </Grid>
      <Paper>
        <Box className={`p-4`}>
          <Typography variant="h4">Enterprise Manager</Typography>
        </Box>
        <ListEnterprisesComponent />
      </Paper>
    </Box>
  );
};

export default App;
