import { AddPeople } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import KontaktPersonInput from './KontaktPersonInput'

export interface IKontaktPerson {
    fornavn: string
    etternavn: string
    team: string
    produktområde: string
    seksjon: string
    telefon: string
    epost: string
}

export default function KontaktPersonerInputs(
    {
        kontaktPersoner,
        kontaktPersonerDispatch
    }: {
        kontaktPersoner: Array<IKontaktPerson>
        kontaktPersonerDispatch: Dispatch<SetStateAction<Array<IKontaktPerson>>>
    }
): ReactElement {
    const leggTilNyKontaktPersonInput = () => {
        kontaktPersonerDispatch(kontaktPersoner.concat({
            fornavn: '',
            etternavn: '',
            team: '',
            produktområde: '',
            seksjon: '',
            telefon: '',
            epost: ''
        }))
    }

    const oppdaterKontaktPerson = (
        id: number,
        fornavn: string,
        etternavn: string,
        team: string,
        produktområde: string,
        seksjon: string,
        telefon: string,
        epost: string
    ) => {
        const kopi = [...kontaktPersoner]
        kopi[id] = {
            fornavn: fornavn,
            etternavn: etternavn,
            team: team,
            produktområde: produktområde,
            seksjon: seksjon,
            telefon: telefon,
            epost: epost
        }
        kontaktPersonerDispatch(kopi)
    }

    return (
        <div>
            {kontaktPersoner.map((kontaktPerson, index) => {
                return (
                    <KontaktPersonInput 
                        key={index} 
                        oppdaterKontaktPerson={oppdaterKontaktPerson}
                        listId={index}
                    />
                )
            })}
            <Knapp
                className="legg-til-kontakt-person-input-knapp"
                onClick={leggTilNyKontaktPersonInput}
            >
                <AddPeople className="legg-til-kontakt-person-ikon"/>
                Legg til person
            </Knapp>
        </div>
    )
}