import { Input } from 'nav-frontend-skjema'
import React, { ReactElement, useState } from 'react'

export default function KontaktPersonInput(
    {
        oppdaterKontaktPerson,
        listId,
    }: {
        oppdaterKontaktPerson: (
            id: number,
            fornavn: string,
            etternavn: string,
            team: string,
            produktområde: string,
            seksjon: string,
            telefon: string,
            epost: string
        ) => void;
        listId: number
}): ReactElement {
    const [fornavn, settFornavn] = useState<string>('')
    const [etternavn, settEtternavn] = useState<string>('')
    const [team, settTeam] = useState<string>('')
    const [produktområde, settProduktområde] = useState<string>('')
    const [seksjon, settSeksjon] = useState<string>('')
    const [telefon, settTelefon] = useState<string>('')
    const [epost, settEpost] = useState<string>('')

    return(
        <div className="input-container">
            <Input 
                className="input-item" 
                label="Fornavn" 
                value={fornavn} 
                onChange={
                    e => {
                        settFornavn(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }
            />
            <Input 
                className="input-item" 
                label="Etternavn"
                value={etternavn}
                onChange={
                    e => {
                        settEtternavn(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }
            />
            <Input 
                className="input-item" 
                label="Team"
                value={team}
                onChange={
                    e => {
                        settTeam(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }
            />
            <Input 
                className="input-item" 
                label="Produktområde"
                value={produktområde}
                onChange={
                    e => {
                        settProduktområde(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }
            />
            <Input 
                className="input-item" 
                label="Seksjon/avdeling"
                value={seksjon}
                onChange={
                    e => {
                        settSeksjon(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }
            />
            <div></div>
            <Input 
                className="input-item" 
                label="Telefon"
                value={telefon}
                onChange={
                    e => {
                        settTelefon(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }
            />
            <Input 
                className="input-item" 
                label="E-postadresse"
                value={epost}
                onChange={
                    e => {
                        settEpost(e.target.value)
                        oppdaterKontaktPerson(
                            listId, 
                            fornavn, 
                            etternavn, 
                            team, 
                            produktområde, 
                            seksjon,
                            telefon,
                            epost
                        )
                    }
                }

            />
        </div>
    )
}