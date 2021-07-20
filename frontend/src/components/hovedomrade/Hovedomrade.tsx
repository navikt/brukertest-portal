import React from 'react'
import '../../style/less/components/hovedomrade/hovedomrade.less'
import HovedomradeTopp from './HovedomradeTopp'
import Hovedinnhold from './Hovedinnhold'

export interface HovedomradeProps {
    tittel?: string
    visFremgangsknapper?: boolean
}

export default function Hovedomrade(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomrade">
            <HovedomradeTopp tittel={props.tittel} />
            <Hovedinnhold visFremgangsknapper={props.visFremgangsknapper} />
        </div>
    )
}
