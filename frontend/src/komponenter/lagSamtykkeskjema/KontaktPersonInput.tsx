import { Input } from 'nav-frontend-skjema'
import React, { ReactElement } from 'react'

export default function KontaktPersonInput(): ReactElement {
    return(
        <div className="input-container">
            <Input className="input-item" label="Fornavn"/>
            <Input className="input-item" label="Etternavn"/>
            <Input className="input-item" label="Team"/>
            <Input className="input-item" label="Produktområde"/>
            <Input className="input-item" label="Seksjon/avdeling"/>
            <div></div>
            <Input className="input-item" label="Telefon"/>
            <Input className="input-item" label="E-postadresse"/>
        </div>
    )
}