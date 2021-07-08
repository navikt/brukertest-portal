import React from "react";
import { Innholdstittel } from "nav-frontend-typografi";
import "../../style/less/components/hovedomrade/hovedomradeTopp.less";
import { HandsHeart } from "@navikt/ds-icons";

export default function HovedomradeTopp() {
  return (
    <div className="hovedomradeTopp">
      <HandsHeart id="toppIcon" />
      <Innholdstittel id="infotekst">
        {"Velkommen til NAVs innbyggerpanel"}
      </Innholdstittel>
      <div id="divider"></div>
    </div>
  );
}