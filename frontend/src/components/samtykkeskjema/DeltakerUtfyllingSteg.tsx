import React, { ReactElement } from 'react'
import { Input } from 'nav-frontend-skjema'

export default function DeltakerUtfyllingSteg(): ReactElement {
    return (
        <>  
            <div className="navn-input-container">
                <Input label="Fornavn" className="navn-input" />
                <Input label="Etternavn" className="navn-input" />
            </div>
            <Input label="E-postadresse"/>
        </>
    )
}