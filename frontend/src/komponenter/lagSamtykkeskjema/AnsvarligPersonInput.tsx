import { Input } from 'nav-frontend-skjema'
import React, { ReactElement, useEffect, useState } from 'react'


export default function AnsvarligPersonInput(): ReactElement {
    const [fornavn, settFornavn] = useState<string>('')
    const [etternavn, settEtternavn] = useState<string>('')
    const [team, settTeam] = useState<string>('')
    const [produktområde, settProduktområde] = useState<string>('')
    const [seksjon, settSeksjon] = useState<string>('')

    useEffect(() => {
        // Kalle "parent" funskjonen om å oppdatere staten
    })

    return(
        <div className="input-container">
            <Input 
                className="input-item" 
                label="Fornavn" 
                value={fornavn} 
                onChange={e => {settFornavn(e.target.value)}}
            />
            <Input 
                className="input-item" 
                label="Etternavn"
                value={etternavn}
                onChange={e => {settEtternavn(e.target.value)}}
            />
            <Input 
                className="input-item" 
                label="Team"
                value={team}
                onChange={e => {settTeam(e.target.value)}}
            />
            <Input 
                className="input-item" 
                label="Produktområde"
                value={produktområde}
                onChange={e => {settProduktområde(e.target.value)}}
            />
            <Input 
                className="input-item" 
                label="Seksjon/avdeling"
                value={seksjon}
                onChange={e => {settSeksjon(e.target.value)}}
            />
        </div>
    )
}