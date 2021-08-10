import { Success } from '@navikt/ds-icons'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import KopierLenke from '../../komponenter/kopierLenke/KopierLenke'

export default function OpprettelseFullført(): React.ReactElement {
    const Innhold = () => (
        <>
            <h2 className="typo-undertittel">Send ut denne lenken til de du skal intervjue:</h2>
            <KopierLenke />
            <h2 className="typo-undertittel">Hvor finner du dette samtykkeskjemaet senere?</h2>
            <p className="typo-normal">
                Hvis du trykker deg inn på din profil vil du se en oversikt over samtykkeskjemaene
                du har laget. Her kan du se samtykkeskjemaet og kopiere lenken.
            </p>
        </>
    )

    return (
        <div className="opprettelse-fullfoert">
            <Hovedomrade
                tittel={'Samtykkeskjema opprettet'}
                toppIkon={<Success />}
                hovedInnhold={<Innhold />}
            />
        </div>
    )
}
