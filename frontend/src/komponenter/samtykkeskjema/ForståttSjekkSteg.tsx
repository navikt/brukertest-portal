import { CheckboxGruppe, Checkbox } from 'nav-frontend-skjema'
import { Undertittel } from 'nav-frontend-typografi'
import React, { ReactElement } from 'react'

//TODO Finne et mer passende navn for komponentet
export default function JegForstårSteg(): ReactElement {
    return (
        <div className="forstaatt-sjekk-steg-container">
            <Undertittel>Jeg forstår:</Undertittel>
            <CheckboxGruppe>
                <Checkbox
                    label={'At det er frivillig å delta, og at jeg når som helst kan trekke meg'}
                    value={'trekke'}
                    id={'trekke1'}
                />
                <Checkbox
                    label={'At jeg når som helst kan avstå fra å svare på spørsmål'}
                    value={'avstå'}
                    id={'avstå1'}
                />
                <Checkbox
                    label={'At jeg når som helst kan trekke tilbake det jeg har sagt'}
                    value={'trekke'}
                    id={'trekke2'}
                />
                <Checkbox
                    label={'At jeg når som helst kan be dere slette mine personlige data'}
                    value={'slette'}
                    id={'slette1'}
                />
            </CheckboxGruppe>
        </div>
    )
}
