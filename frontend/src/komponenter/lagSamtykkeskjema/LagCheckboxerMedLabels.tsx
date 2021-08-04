import { Add } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import { Input } from 'nav-frontend-skjema'
import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction, useState } from 'react'
import CheckboxMedLabel from './CheckboxMedLabel'

export interface ILagCheckbokserMedLabels {
    labelsListe: Array<string>
    labelsListeDispatch: Dispatch<SetStateAction<Array<string>>>
    inputLabel: string
}

export default function LagCheckboxerMedLabels({labelsListe, labelsListeDispatch, inputLabel}: ILagCheckbokserMedLabels): ReactElement {
    const [gjeldendeInputVerdi, settGjeldendeInputVerdi] = useState<string>('')
    const [checkboxMedLabelKomponenter, settCheckboxMedLabelKomponenter] = useState<Array<ReactElement>>([])

    const påJegForstårInput = (e: ChangeEvent<HTMLInputElement>) => {
        settGjeldendeInputVerdi(e.target.value)
    }

    const påLeggTilJegForstårPunkt = () => {
        settCheckboxMedLabelKomponenter(checkboxMedLabelKomponenter.concat(<CheckboxMedLabel key={checkboxMedLabelKomponenter.length} label={gjeldendeInputVerdi}/>))

        const kopi = [...labelsListe]
        kopi.push(gjeldendeInputVerdi)
        labelsListeDispatch(kopi)
    }

    return (
        <div>
            {checkboxMedLabelKomponenter}
            <div className="checkboxer-label-input-container">
                <Input 
                    className="checkboxer-label-input" 
                    label={inputLabel}
                    value={gjeldendeInputVerdi}
                    onChange={påJegForstårInput}
                />
                <Knapp 
                    className="checkboxer-label-legg-til-knapp"
                    onClick={påLeggTilJegForstårPunkt}    
                >
                    <Add className="legg-til-checkboxer-label-ikon"/>
                    Legg til
                </Knapp>
            </div>
        </div>
    )
}