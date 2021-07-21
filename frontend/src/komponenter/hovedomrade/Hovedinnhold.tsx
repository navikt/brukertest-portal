import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import LoginPrimer from '../../containere/knapper/LoggInnHovedknapp'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'

export default function Hovedinnhold(props: HovedomradeProps): React.ReactElement {
    const Knapper = () => (
        <div className="fremgangsknapper">
            <Tilbakeknapp />
            <Nesteknapp />
        </div>
    )

    return (
        <div className="hovedinnhold">
            <Systemtittel className="loggInnInfo">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
            {props.visFremgangsknapper ? <Knapper /> : null}
        </div>
    )
}
