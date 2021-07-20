import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import '../../style/less/components/hovedomrade/hovedinnhold.less'
import LoginPrimer from '../../containers/button/LoginPrimer'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'

export default function Hovedinnhold(props: HovedomradeProps): React.ReactElement {
    const Knapper = () => (
        <div className="fremgangsknapper">
            <Tilbakeknapp className="tilbakeBtn" />
            <Nesteknapp className="nesteBtn" />
        </div>
    )

    return (
        <div className="hovedinnhold">
            <Systemtittel className="logininfo">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
            {props.visFremgangsknapper ? <Knapper /> : null}
        </div>
    )
}
