import React from "react";
import { Knapp } from "nav-frontend-knapper";
import "../../style/less/view/landingsside.less";
import Tekstomrade from "nav-frontend-tekstomrade";

export default function Landingsside() {
  return (
    <div className="hovedOmrade">
      <Tekstomrade>
        {"Dette er et tekstområde. \n Dette er en ny linje."}
      </Tekstomrade>
      <Knapp>NAV-knapp test</Knapp>
    </div>
  );
}
