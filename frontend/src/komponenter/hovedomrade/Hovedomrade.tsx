import React from 'react'
import HovedomradeTopp from './HovedomradeTopp'
import Hovedinnhold from './Hovedinnhold'
import HovedomradeBunn from './HovedomradeBunn'

export interface HovedomradeProps {
    tittel?: string
    toppIkon?: React.ReactElement
    visFremgangsknapper?: boolean
    hovedInnhold?: React.ReactElement
}

export default function Hovedomrade(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomrade">
            <HovedomradeTopp tittel={props.tittel} toppIkon={props.toppIkon} />
            <Hovedinnhold hovedInnhold={props.hovedInnhold} />
            <HovedomradeBunn />
        </div>
    )
}
