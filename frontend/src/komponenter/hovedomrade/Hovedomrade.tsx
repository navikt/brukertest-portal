import React from 'react'
import HovedomradeTopp from './HovedomradeTopp'
import Hovedinnhold from './Hovedinnhold'
import HovedomradeBunn from './HovedomradeBunn'

export interface HovedomradeProps {
    tittel?: string
    visFremgangsknapper?: boolean
}

export default function Hovedomrade(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomrade">
            <HovedomradeTopp tittel={props.tittel} />
            <Hovedinnhold />
            <HovedomradeBunn visFremgangsknapper={props.visFremgangsknapper} />
        </div>
    )
}
