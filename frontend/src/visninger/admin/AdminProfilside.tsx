import { AddCircle, Calender, FileContent } from '@navikt/ds-icons'
import React from 'react'
import Profil from '../../containere/profil/Profil'

export default function AdminProfilside(): React.ReactElement {
    return (
        <Profil
            brukernavn="Admin Istrator"
            linkVenstreRoutePath="/admin/mine-samtykkeskjemaer"
            linkVenstreIkon={<FileContent />}
            linkVenstreTittel="Mine samtykkeskjemaer"
            linkVenstreInnhold="Her kan du se, redigere eller slette dine opprettede
                                samtykkeskjemaer. Du finner også lenken du kan dele med brukeren."
            linkMidtenRoutePath="/admin/opprett-samtykkeskjema"
            linkMidtenIkon={<AddCircle />}
            linkMidtenTittel="Opprett samtykkeskjema"
            linkMidtenInnhold="Her kan du se, redigere eller slette dine opprettede
                samtykkeskjemaer. Du finner også lenken du kan dele med brukeren."
            linkHøyreIkon={<Calender />}
            linkHøyreTittel="Aktiviteter"
            linkHøyreInnhold="Her kan du legge ut intervju, brukertester og spørreundersøkelser en
                bruker kan melde sin interesse i å delta på."
        />
    )
}
