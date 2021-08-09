import { Caseworker, FileContent, Search } from '@navikt/ds-icons'
import React from 'react'
import Profil from '../../containere/profil/Profil'

export default function DeltakerProfilside(): React.ReactElement {
    return (
        <Profil
            brukernavn="Ola Nordmann"
            linkVenstreRoutePath="/admin/mine-samtykkeskjemaer"
            linkVenstreIkon={<FileContent />}
            linkVenstreTittel="Mine samtykkeskjemaer"
            linkVenstreInnhold="Her kan du se, redigere eller slette de samtykkeskjemaene du har
                singert."
            linkMidtenRoutePath="/admin/opprett-samtykkeskjema"
            linkMidtenIkon={<Search />}
            linkMidtenTittel="Hva kan jeg bli med på?"
            linkMidtenInnhold="En oversikt over framtidige brukertester, intervjuer og
                spørreundersøkelser du kan melde din interesse til."
            linkHøyreRoutePath="/"
            linkHøyreIkon={<Caseworker />}
            linkHøyreTittel="Mine kontaktopplysninger"
            linkHøyreInnhold="Her kan du se hvilken informasjon du har registrert."
        />
    )
}
