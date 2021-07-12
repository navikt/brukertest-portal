import React from "react";
import "../../style/less/containers/loginPrimer.less";
import { Hovedknapp } from "nav-frontend-knapper";

export default function LoginPrimer() {
  return (
    <div className="loginPrimer">
      <Hovedknapp className="hovedknapp">Logg inn</Hovedknapp>
    </div>
  );
}