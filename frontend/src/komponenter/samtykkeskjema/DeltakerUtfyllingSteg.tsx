import React, { ReactElement } from 'react'
import { Checkbox, CheckboxGruppe, Input } from 'nav-frontend-skjema'
import Tekstomrade, { BoldRule } from 'nav-frontend-tekstomrade'
import { CheckboksPanelGruppe } from 'nav-frontend-skjema'
import { Element } from 'nav-frontend-typografi'

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
            <Element className="checkbox-overskrift" tag="p">
                {/* TODO: Gjøre det slik at kun første del av teksten er bold */}
                Hva sier jeg ja til? (kryss av boksene for det du følger deg komfortabel med)
            </Element>
            <CheckboxGruppe className="checkboxGruppe">
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
