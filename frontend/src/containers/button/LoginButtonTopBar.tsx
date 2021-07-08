import React from "react";
import { ReactComponent as PersonIkon } from "../../style/assets/PersonIkon.svg";
import "../../style/less/containers/LoginButtonTopBar.less";
import { Flatknapp } from "nav-frontend-knapper";

export default function LoginButtonTopBar() {
  return (
    <div className="loginBtnTopBar">
      <Flatknapp id="loginBtn1">
        <span>Logg inn</span>
        <PersonIkon id="personIkon" />
      </Flatknapp>
    </div>
  );
}
