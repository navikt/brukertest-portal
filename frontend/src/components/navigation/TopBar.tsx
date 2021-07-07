import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import "../../style/less/components/topBar.less";

export default function TopBar() {
  return (
    <div className="topBar">
      <Sidetittel id="sidetittel">{"Innbyggerpanelet"}</Sidetittel>
    </div>
  );
}
