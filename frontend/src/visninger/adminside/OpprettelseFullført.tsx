import { Success } from '@navikt/ds-icons'
import { Hovedknapp } from 'nav-frontend-knapper'
import React from 'react'
import { Link } from '@navikt/ds-icons'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { Input } from 'nav-frontend-skjema'

export default function OpprettelseFullført(): React.ReactElement {
    const Innhold = () => (
        <>
            <h2 className="typo-undertittel">Send ut denne lenken til de du skal intervjue:</h2>
            <div className="lenke-komponent">
                <Input value="lenke.no" className="lenke-input" />
                <Hovedknapp className="lenke-kopi-knapp">
                    <Link />
                    <span> Kopier lenke</span>
                </Hovedknapp>
            </div>
            <h2 className="typo-undertittel">Hvor finner du dette samtykkeskjemaet senere?</h2>
            <p className="typo-normal">
                Hvis du trykker deg inn på din profil vil du se en oversikt over samtykkeskjemaene
                du har laget. Her kan du se samtykkeskjemaet og kopiere lenken.
            </p>
        </>
    )

    return (
        <div className="opprettelse-fullført">
            <Hovedomrade
                tittel={'Samtykkeskjema opprettet'}
                toppIkon={<Success />}
                hovedInnhold={<Innhold />}
            />
        </div>
    )
}
