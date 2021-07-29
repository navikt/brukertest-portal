import React from 'react'
import { Innholdstittel } from 'nav-frontend-typografi'
import { HovedomradeProps } from './Hovedomrade'

export default function HovedomradeTopp(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomrade-topp">
            <div className="topp-ikon">{props.toppIkon}</div>
            <Innholdstittel className="infotekst">{props.tittel}</Innholdstittel>
            <div className="divider"></div>
        </div>
    )
}
