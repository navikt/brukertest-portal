import { AddPeople } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import AnsvarligPersonInput from './AnsvarligPersonInput'

export interface IAnsvarligPerson {
    id?: number
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
            id: ansvarligePersoner.length,
            fornavn: '',
            etternavn: '',
            team: '',
            produktområde: '',
            seksjon: ''
        }))
    }

    return (
        <div>
            {ansvarligePersoner.map((ansvarligPerson, index) => {
                return (
                    <AnsvarligPersonInput key={index}/>
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