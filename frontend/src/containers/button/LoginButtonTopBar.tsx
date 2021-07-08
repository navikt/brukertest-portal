import React from "react";
import { People } from "@navikt/ds-icons";
import "../../style/less/containers/loginButtonTopBar.less";
import { Flatknapp } from "nav-frontend-knapper";

export default function LoginButtonTopBar() {
  return (
    <div className="loginBtnTopBar">
      <Flatknapp id="loginBtn1">
        <span>Logg inn</span>
        <People id="personIkon" />
      </Flatknapp>
    </div>
  );
}
