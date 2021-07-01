import React from "react";
import "./App.less";
import Tekstomrade from "nav-frontend-tekstomrade";
import { Knapp } from "nav-frontend-knapper";

const App = (): JSX.Element => (
  <div className="App">
    <Tekstomrade>
      {"Dette er et tekstområde. \n Dette er en ny linje."}
    </Tekstomrade>
    <Knapp>NAV-knapp test</Knapp>
  </div>
);

export default App;
