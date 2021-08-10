import { FileContent } from '@navikt/ds-icons'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function OpprettSamtykke(): React.ReactElement {
    const history = useHistory()
    const Innhold = () => (
        <>
            <Systemtittel className="skjema-info">{'Hva skal du arrangere?'}</Systemtittel>
            <div className="knapper">
                <Hovedknapp onClick={() => history.push('/admin/lag-samtykkeskjema-visning')}>
                    Intervju
                </Hovedknapp>
                <Hovedknapp onClick={() => history.push('/admin/lag-samtykkeskjema-visning')}>
                    Brukertest
                </Hovedknapp>
                <Hovedknapp onClick={() => history.push('/admin/lag-samtykkeskjema-visning')}>
                    Spørreundersøkelse
                </Hovedknapp>
            </div>
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
