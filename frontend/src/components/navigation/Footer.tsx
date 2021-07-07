import React from "react";
import { ReactComponent as NavLogoSort } from "../../style/assets/Sort.svg";
import Tekstomrade from "nav-frontend-tekstomrade";

export default function Footer() {
  return (
    <div className="footer">
      <NavLogoSort id="logo" />
      <Tekstomrade>{"Innbyggerpanelet - en tjeneste fra NAV"}</Tekstomrade>
    </div>
  );
}
