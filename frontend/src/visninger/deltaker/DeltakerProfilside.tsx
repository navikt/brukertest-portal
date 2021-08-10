import { Caseworker, FileContent, Search } from '@navikt/ds-icons'
import React from 'react'
import Profil from '../../containere/profil/Profil'

export default function DeltakerProfilside(): React.ReactElement {
    return (
        <Profil
            brukernavn="Ola Nordmann"
            knappVenstreRoutePath="/admin/mine-samtykkeskjemaer"
            knappVenstreIkon={<FileContent />}
            knappVenstreTittel="Mine samtykkeskjemaer"
            knappVenstreInnhold="Her kan du se, redigere eller slette de samtykkeskjemaene du har
                singert."
            knappMidtenRoutePath="/admin/opprett-samtykkeskjema"
            knappMidtenIkon={<Search />}
            knappMidtenTittel="Hva kan jeg bli med på?"
            knappMidtenInnhold="En oversikt over framtidige brukertester, intervjuer og
                spørreundersøkelser du kan melde din interesse til."
            knappHøyreRoutePath="/"
            knappHøyreIkon={<Caseworker />}
            knappHøyreTittel="Mine kontaktopplysninger"
            knappHøyreInnhold="Her kan du se hvilken informasjon du har registrert."
        />
    )
}
