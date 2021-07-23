import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import LoginPrimer from '../../containere/knapper/LoggInnHovedknapp'
import { useSamtykkeskjemaSteg } from '../../visninger/samtykkeskjema/Samtykkeskjema'

export default function Hovedinnhold(): React.ReactElement {
    const { samtykkeskjemaStegStates, dispatchSamtykkeskjemaSteg } = useSamtykkeskjemaSteg()

    return (
        <div className="hovedinnhold">
            <Systemtittel className="loggInnInfo">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
            {samtykkeskjemaStegStates?.komponent}
        </div>
    )
}
