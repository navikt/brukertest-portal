import { Hovedknapp } from 'nav-frontend-knapper'
import { Input } from 'nav-frontend-skjema'
import React from 'react'
import { Link } from '@navikt/ds-icons'

export default function KopierLenke(): React.ReactElement {
    const lenkeBase = 'www.innbyggerpanelet.no/'

    // Lager en lenke med en tilfeldig ID på enden
    const lenkeTekst = lenkeBase.concat(lagID(8))

    // TODO: Gjøre om denne til å lage en unik ID (Nå kan samme ID bli generert)
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

    return (
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
    )
}
