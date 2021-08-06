import { FileContent } from '@navikt/ds-icons'
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function OpprettSamtykke(): React.ReactElement {
    const Innhold = () => (
        <>
            <Systemtittel className="skjema-info">{'Aktive:'}</Systemtittel>
            <Ekspanderbartpanel
                tittel={
                    <div>
                        <Normaltekst>Klikk her for å åpne/lukke panelet</Normaltekst>
                    </div>
                }
            >
                Panelet vil da ekspandere og vise innholdet.
            </Ekspanderbartpanel>
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
