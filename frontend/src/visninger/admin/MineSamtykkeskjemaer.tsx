import { FileContent } from '@navikt/ds-icons'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import SamtykkeskjemaListePanel from '../../komponenter/samtykkeskjemaListePanel/SamtykkeskjemaListePanel'

export default function OpprettSamtykke(): React.ReactElement {
    const Innhold = () => (
        <>
            <Systemtittel className="listetittel">{'Aktive skjemaer:'}</Systemtittel>
            <SamtykkeskjemaListePanel skjemanavn="Intervju om arbeidsledighet" />
            <SamtykkeskjemaListePanel skjemanavn="Brukertest av arbeidsplassen" />
            <Systemtittel className="listetittel" id="listetittel2">
                {'Tidligere brukte skjemaer:'}
            </Systemtittel>
            <SamtykkeskjemaListePanel skjemanavn="Intervju om nav.no" />
        </>
    )
    return (
        <div className="mine-samtykkeskjemaer">
            <Hovedomrade
                tittel={'Mine samtykkeskjemaer'}
                toppIkon={<FileContent />}
                hovedInnhold={<Innhold />}
            />
        </div>
    )
}
