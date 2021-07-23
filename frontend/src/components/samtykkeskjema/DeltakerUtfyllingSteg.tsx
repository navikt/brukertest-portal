import React, { ReactElement } from 'react'
import { Input } from 'nav-frontend-skjema'
import Tekstomrade, {BoldRule} from 'nav-frontend-tekstomrade'
import { CheckboksPanelGruppe } from 'nav-frontend-skjema'

export default function DeltakerUtfyllingSteg(): ReactElement {
    return (
        <>  
            <div className="navn-input-container">
                <Input label="Fornavn" className="navn-input" />
                <Input label="Etternavn" className="navn-input" />
            </div>
            <div className="epost-input">
                <Input label="E-postadresse"/>
            </div>
            <CheckboksPanelGruppe 
                legend={
                    <Tekstomrade rules={[BoldRule]} className="type-samtykke-infotekst">
                        {'_Hva sier jeg ja til?_ (kryss av boksene for det du følger deg komforatbel med)'}
                    </Tekstomrade>
                }
                checkboxes={[
                    {label: 'Ja, jeg ønsker å delta i intervju', value: 'intervju', id: 'intervju1'},
                    {label: 'Ja, jeg ønsker å delta i brukertest', value: 'brukertest', id: 'brukertest1'},
                    {label: 'Ja, dere kan ta lydopptak', value: 'lydopptak', id: 'lydopptak1'}
                ]}
                onChange={() => {
                    //Veldig fin tom funskjon
                }}
            />
        </>
    )
}