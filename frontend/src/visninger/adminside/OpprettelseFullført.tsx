import { Success } from '@navikt/ds-icons'
import { Hovedknapp } from 'nav-frontend-knapper'
import React from 'react'
import { Link } from '@navikt/ds-icons'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { Input } from 'nav-frontend-skjema'

export default function OpprettelseFullført(): React.ReactElement {
    const lenkeBase = 'www.innbyggerpanelet.no/'

    // Lager en lenke med en tilfeldig ID på enden
    const lenkeTekst = lenkeBase.concat(lagID(8))

    // Lager en tilfeldig string
    function lagID(lengde: number) {
        let resultat = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for (let i = 0; i < lengde; i++) {
            resultat += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return resultat
    }

    const Innhold = () => (
        <>
            <h2 className="typo-undertittel">Send ut denne lenken til de du skal intervjue:</h2>
            <div className="lenke-komponent">
                <Input value={lenkeTekst} className="lenke-input" />
                <Hovedknapp
                    className="lenke-kopi-knapp"
                    onClick={() => {
                        navigator.clipboard.writeText(lenkeTekst)
                    }}
                >
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
