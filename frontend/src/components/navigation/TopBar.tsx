import React from "react";
import { Sidetittel } from "nav-frontend-typografi";
import "../../style/less/components/navigation/topBar.less";
import LoginButtonTopBar from "../../containers/button/LoginButtonTopBar";

export default function TopBar() {
  return (
    <div className="topBar">
      <Sidetittel id="sidetittel">{"Innbyggerpanelet"}</Sidetittel>
      <div id="loginBtn">
        <LoginButtonTopBar />
      </div>
    </div>
  );
}
