import { AddPeople } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
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
    const [ansvarligPersonerInputListe, settAnsvarligPersonerInputListe] = useState<ReactElement[]>([<AnsvarligPersonInput key={0}/>])
    
    const leggTilNyAnsvarligPersonInput = () => {
        settAnsvarligPersonerInputListe(ansvarligPersonerInputListe.concat(<AnsvarligPersonInput key={ansvarligPersonerInputListe.length}/>))
    }

    return (
        <div>
            {ansvarligPersonerInputListe}
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