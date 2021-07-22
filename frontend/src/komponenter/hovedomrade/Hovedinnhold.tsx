import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import LoginPrimer from '../../containere/knapper/LoggInnHovedknapp'

export default function Hovedinnhold(): React.ReactElement {
    return (
        <div className="hovedinnhold">
            <Systemtittel className="loggInnInfo">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
        </div>
    )
}
