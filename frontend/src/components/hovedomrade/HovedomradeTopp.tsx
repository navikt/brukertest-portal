import React from "react";
import { Innholdstittel } from "nav-frontend-typografi";
import "../../style/less/components/hovedomrade/hovedomrade.less";

export default function HovedomradeTopp() {
  return (
    <div className="hovedomradeTopp">
      <Innholdstittel id="infotekst">
        {"Velkommen til NAVs innbyggerpanel"}
      </Innholdstittel>
    </div>
  );
}
