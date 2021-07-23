import React from 'react'
import { Innholdstittel } from 'nav-frontend-typografi'
import { HandsHeart } from '@navikt/ds-icons'
import { HovedomradeProps } from './Hovedomrade'

export default function HovedomradeTopp(props: HovedomradeProps): React.ReactElement {
    return (
        <div className="hovedomradeTopp">
            <HandsHeart className="toppIkon" />
            <Innholdstittel className="infotekst">{props.tittel}</Innholdstittel>
            <div className="divider"></div>
        </div>
    )
}