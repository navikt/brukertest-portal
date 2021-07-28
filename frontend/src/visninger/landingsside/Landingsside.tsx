import { HandsHeart } from '@navikt/ds-icons'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import LoggInnHovedknapp from '../../containere/knapper/LoggInnHovedknapp'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function Landingsside(): React.ReactElement {
    const LandingssideInnhold = () => (
        <div>
            <Systemtittel className="logg-inn-info">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoggInnHovedknapp />
        </div>
    )

    return (
        <div className="landingsside">
            <Hovedomrade
                tittel={'Velkommen til NAVs innbyggerpanel'}
                toppIkon={<HandsHeart />}
                hovedInnhold={<LandingssideInnhold />}
            />
        </div>
    )
}
