import React from 'react'
import HovedomradeTopp from './HovedomradeTopp'
import Hovedinnhold from './Hovedinnhold'

export interface HovedomradeProps {
    tittel?: string | React.ReactElement
    toppIkon?: React.ReactElement
    visFremgangsknapper?: boolean
    hovedInnhold?: React.ReactElement
}

export default function Hovedomrade(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomrade">
            <HovedomradeTopp tittel={props.tittel} toppIkon={props.toppIkon} />
            <Hovedinnhold hovedInnhold={props.hovedInnhold} />
        </div>
    )
}
