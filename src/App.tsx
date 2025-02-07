import React from "react";

import logo from "./logo.svg";
import "./App.css";

import { useHelloWorldQuery } from "./generated/graphql";
import { BoxComponent } from "./components/Box/Box";

const App = () => {
  const { data, loading } = useHelloWorldQuery();

  return <BoxComponent>hello world</BoxComponent>;
};

export default App;
