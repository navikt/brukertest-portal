import React from "react"
import { ReactComponent as NavLogoSort } from "../../style/assets/Sort.svg"
import Tekstomrade from "nav-frontend-tekstomrade"
import "../../style/less/components/Footer.less"

export default function Footer(): React.ReactElement {
    return (
        <div className="footer">
            <NavLogoSort id="logo" />
            <Tekstomrade id="infotekst">
                {"Innbyggerpanelet - en tjeneste fra NAV"}
            </Tekstomrade>
        </div>
    )
}
