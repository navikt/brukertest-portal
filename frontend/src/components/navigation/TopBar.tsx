import React from "react"
import { Sidetittel } from "nav-frontend-typografi"
import "../../style/less/components/navigation/topBar.less"
import LoginButtonTopBar from "../../containers/button/LoginButtonTopBar"

export default function TopBar(): React.ReactElement {
    return (
        <div className="topBar">
            <Sidetittel className="sidetittel">{"Innbyggerpanelet"}</Sidetittel>
            <div className="loginBtn">
                <LoginButtonTopBar />
            </div>
        </div>
    )
}
