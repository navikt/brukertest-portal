import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import '../../style/less/components/hovedomrade/hovedinnhold.less'
import LoginPrimer from '../../containers/button/LoginPrimer'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'

export default function Hovedinnhold(): React.ReactElement {
    return (
        <div className="hovedinnhold">
            <Systemtittel className="logininfo">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
            <div className="fremgangsknapper">
                <Tilbakeknapp className="tilbakeBtn" />
                <Nesteknapp className="nesteBtn" />
            </div>
        </div>
    )
}
