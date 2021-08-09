import { AddPeople } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import AnsvarligPersonInput from './AnsvarligPersonInput'

export interface IAnsvarligPerson {
    fornavn: string
    etternavn: string
    team: string
    produktområde: string
    seksjon: string
}

export default function AnsvaligPersonerInputs(
    {
        ansvarligePersoner, 
        ansvarligePersonerDispatch
    }: {
        ansvarligePersoner: Array<IAnsvarligPerson>; 
        ansvarligePersonerDispatch: Dispatch<SetStateAction<Array<IAnsvarligPerson>>>}
): ReactElement {
    const leggTilNyAnsvarligPersonInput = () => {
        ansvarligePersonerDispatch(ansvarligePersoner.concat({
            fornavn: '',
            etternavn: '',
            team: '',
            produktområde: '',
            seksjon: ''
        }))
    }

    const oppdaterAnsvarligPerson = (
        id: number, 
        fornavn: string, 
        etternavn: string, 
        team: string, 
        produktområde: string, 
        seksjon: string
    ) => {
        const kopi = [...ansvarligePersoner]
        kopi[id] = {
            fornavn: fornavn,
            etternavn: etternavn,
            team: team,
            produktområde: produktområde,
            seksjon: seksjon
        }
        ansvarligePersonerDispatch(kopi)
    }
    
    return (
        <div>
            {ansvarligePersoner.map((ansvarligPerson, index) => {
                return (
                    <AnsvarligPersonInput 
                        key={index}
                        oppdaterAnsvarligPerson={oppdaterAnsvarligPerson}
                        listId={index}
                    />
                )
            })}
            <Knapp 
                className="legg-til-ansvarlig-person-input-knapp"
                onClick={leggTilNyAnsvarligPersonInput}
            >
                <AddPeople className="legg-til-ansvarlig-person-ikon"/>
                Legg til person
            </Knapp>
        </div>
    )
}