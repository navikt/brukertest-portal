import React from "react";
import { Innholdstittel } from "nav-frontend-typografi";
import "../../style/less/components/hovedomrade.less";

export default function Hovedomrade() {
  return (
    <div className="hovedomrade">
      <Innholdstittel id="infotekst">
        {"Velkommen til NAVs innbyggerpanel"}
      </Innholdstittel>
    </div>
  );
}
