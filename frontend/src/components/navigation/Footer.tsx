import React from "react";
import { ReactComponent as NavLogoSort } from "../../style/assets/Sort.svg";
import { Undertekst } from "nav-frontend-typografi";
import "../../style/less/components/navigation/footer.less";

export default function Footer() {
  return (
    <div className="footer">
      <NavLogoSort className="logo" />
      <Undertekst className="infotekst">
        {"Innbyggerpanelet - en tjeneste fra NAV"}
      </Undertekst>
    </div>
  );
}
