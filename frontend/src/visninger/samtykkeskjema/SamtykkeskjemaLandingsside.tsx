import { HandsHeart } from '@navikt/ds-icons'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import LoggInnHovedknapp from '../../containere/knapper/LoggInnHovedknapp'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function SamtykkeskjemaLandingsside(): React.ReactElement {
    const Sideinnhold = () => (
        <>
            <Systemtittel className="logg-inn-info">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoggInnHovedknapp />
        </>
    )

    return (
        <div className="landingsside">
            <Hovedomrade
                tittel={'Velkommen til NAVs innbyggerpanel'}
                toppIkon={<HandsHeart />}
                hovedInnhold={<Sideinnhold />}
            />
        </div>
    )
}
