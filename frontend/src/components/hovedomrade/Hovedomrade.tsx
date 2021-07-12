import React from "react"
import "../../style/less/components/hovedomrade/hovedomrade.less"
import HovedomradeTopp from "./HovedomradeTopp"
import Hovedinnhold from "./Hovedinnhold"

export default function Hovedomrade(): React.ReactElement {
    return (
        <div className="hovedomrade">
            <HovedomradeTopp />
            <Hovedinnhold />
        </div>
    )
}
