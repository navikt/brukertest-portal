import React, { ReactElement } from 'react'
import { Checkbox, CheckboxGruppe, Input } from 'nav-frontend-skjema'
import { Element, Normaltekst } from 'nav-frontend-typografi'

export default function DeltakerUtfyllingSteg(): ReactElement {
    return (
        <>
            <div className="navn-input-container">
                <Input label="Fornavn" className="navn-input" />
                <Input label="Etternavn" className="navn-input" />
            </div>
            <div className="epost-input">
                <Input label="E-postadresse" />
            </div>
            <div className="checkbox-overskrift">
                <Element>Hva sier jeg ja til?</Element>
                <Normaltekst className="ekstra-tekst">
                    &nbsp;&nbsp;(kryss av boksene for det du føler deg komfortabel med)
                </Normaltekst>
            </div>
            <CheckboxGruppe className="checkbox-gruppe">
                <Checkbox
                    label={'Ja, jeg ønsker å delta i brukertesten'}
                    value={'intervju'}
                    id={'intervju1'}
                />
                <Checkbox
                    label={'Ja, jeg godtar at det kan bli gjort lydopptak'}
                    value={'lydopptak'}
                    id={'lydopptak1'}
                />
            </CheckboxGruppe>
        </>
    )
}
