import React from 'react'
import HovedomradeTopp from './HovedomradeTopp'
import Hovedinnhold from './Hovedinnhold'
import HovedomradeBunn from './HovedomradeBunn'

export interface HovedomradeProps {
    tittel?: string
    visFremgangsknapper?: boolean
    hovedInnhold?: React.ReactElement
}

export default function Hovedomrade(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomrade">
            <HovedomradeTopp tittel={props.tittel} />
            <Hovedinnhold hovedInnhold={props.hovedInnhold} />
            <HovedomradeBunn />
        </div>
    )
}
