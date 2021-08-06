import { Delete, Edit, Eye, FileContent } from '@navikt/ds-icons'
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel'
import { Flatknapp, Hovedknapp } from 'nav-frontend-knapper'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import KopierLenke from '../../komponenter/kopierLenke/KopierLenke'

export default function OpprettSamtykke(): React.ReactElement {
    const Innhold = () => (
        <>
            <Systemtittel className="listetittel">{'Aktive:'}</Systemtittel>
            <Ekspanderbartpanel
                tittel={<Normaltekst>Klikk her for å åpne/lukke panelet</Normaltekst>}
                className="ekspanderbart-panel"
            >
                <KopierLenke />
                <div className="skjemaknapper">
                    <Flatknapp>
                        <Eye />
                        <span>Se samtykkeskjema</span>
                    </Flatknapp>
                    <Flatknapp>
                        <Edit />
                        <span>Rediger</span>
                    </Flatknapp>
                    <Flatknapp>
                        <Delete />
                        <span>Slett</span>
                    </Flatknapp>
                </div>
            </Ekspanderbartpanel>
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
