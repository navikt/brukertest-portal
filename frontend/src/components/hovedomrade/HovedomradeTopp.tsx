import React from "react"
import { Innholdstittel } from "nav-frontend-typografi"
import "../../style/less/components/hovedomrade/hovedomradeTopp.less"
import { HandsHeart } from "@navikt/ds-icons"

export default function HovedomradeTopp(): React.ReactElement {
    return (
        <div className="hovedomradeTopp">
            <HandsHeart className="toppIcon" />
            <Innholdstittel className="infotekst">
                {"Velkommen til NAVs innbyggerpanel"}
            </Innholdstittel>
            <div className="divider"></div>
        </div>
    )
}
