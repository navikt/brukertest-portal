import { FileContent } from '@navikt/ds-icons'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import { Link } from 'react-router-dom'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function OpprettSamtykke(): React.ReactElement {
    const Innhold = () => (
        <>
            <Systemtittel className="skjema-info">{'Hva skal du arrangere?'}</Systemtittel>
            <Link to="/admin/skjema-opprettet" className="knapper">
                <Hovedknapp>Intervju</Hovedknapp>
                <Hovedknapp>Brukertest</Hovedknapp>
                <Hovedknapp>Spørreundersøkelse</Hovedknapp>
            </Link>
        </>
    )

    return (
        <div className="landingsside-opprett">
            <Hovedomrade
                tittel={'Opprett samtykkeskjema'}
                toppIkon={<FileContent />}
                hovedInnhold={<Innhold />}
            />
        </div>
    )
}
