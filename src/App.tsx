import React from "react";

import logo from "./logo.svg";
import "./App.css";

import { useHelloWorldQuery } from "./generated/graphql";
import Button from "@mui/material/Button";

const App = () => {
  const { data, loading } = useHelloWorldQuery();

  return <Button variant="contained">Hello world</Button>;
};

export default App;
