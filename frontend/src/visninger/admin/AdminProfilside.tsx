import { AddCircle, Calender, FileContent } from '@navikt/ds-icons'
import React from 'react'
import Profil from '../../containere/profil/Profil'

export default function AdminProfilside(): React.ReactElement {
    return (
        <Profil
            brukernavn="Admin Istrator"
            knappVenstreRoutePath="/admin/mine-samtykkeskjemaer"
            knappVenstreIkon={<FileContent />}
            knappVenstreTittel="Mine samtykkeskjemaer"
            knappVenstreInnhold="Her kan du se, redigere eller slette dine opprettede
                                samtykkeskjemaer. Du finner også lenken du kan dele med brukeren."
            knappMidtenRoutePath="/admin/opprett-samtykkeskjema"
            knappMidtenIkon={<AddCircle />}
            knappMidtenTittel="Opprett samtykkeskjema"
            knappMidtenInnhold="Her kan du se, redigere eller slette dine opprettede
                samtykkeskjemaer. Du finner også lenken du kan dele med brukeren."
            knappHøyreRoutePath="/"
            knappHøyreIkon={<Calender />}
            knappHøyreTittel="Aktiviteter"
            knappHøyreInnhold="Her kan du legge ut intervju, brukertester og spørreundersøkelser en
                bruker kan melde sin interesse i å delta på."
        />
    )
}
