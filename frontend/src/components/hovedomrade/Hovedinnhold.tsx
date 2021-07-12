import React from "react";
import { Systemtittel } from "nav-frontend-typografi";
import "../../style/less/components/hovedomrade/hovedinnhold.less";
import LoginPrimer from "../../containers/button/LoginPrimer";

export default function Hovedinnhold() {
  return (
    <div className="hovedinnhold">
      <Systemtittel className="logininfo">
        {"Logg inn for å registrere ditt samtykke"}
      </Systemtittel>
      <LoginPrimer />
    </div>
  );
}
