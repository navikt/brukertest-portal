import React from "react";
import "../../style/less/containers/LoginButtonTopBar.less";
import { Hovedknapp } from "nav-frontend-knapper";

export default function LoginButtonTopBar() {
  return (
    <div className="loginPrimer">
      <Hovedknapp>Logg inn</Hovedknapp>
    </div>
  );
}
