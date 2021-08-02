import { Datepicker } from 'nav-datovelger'
import Hjelpetekst from 'nav-frontend-hjelpetekst'
import { Radio, TextareaControlled } from 'nav-frontend-skjema'
import React, { ReactElement, useState } from 'react'

export default function LagSamtykkeskjema(): ReactElement {
    const [startDato, settStartDato] = useState<string>('')
    const [sluttDato, settSluttDato] = useState<string>('')

    return (
        <div className="lag-samtykkeskjema">
            <div className="sub-overskrift">
                <h3>Invitasjon til deltagelse</h3>
                <Hjelpetekst>Pass på å ikke avsløre deltakerens tilknyttning til NAV eller sensitive personopplysninger</Hjelpetekst>
            </div>
            <TextareaControlled 
                label="Du inviteres til å delta i en undersøkelse om" 
                maxLength={2000}
                defaultValue=""
            />
            <TextareaControlled 
                label="Du er valgt ut fordi" 
                maxLength={2000}
                defaultValue=""
            />
            <div className="sub-overskrift">
                <h3>Hva skal undersøkelsen brukes til?</h3>
                <Hjelpetekst>Datoen må være på format: DD.MM.ÅÅÅÅ</Hjelpetekst>
            </div>
            <TextareaControlled 
                label="Undersøkelsen skal brukes til" 
                maxLength={2000}
                defaultValue=""
            />
            <div className="dato-container">
                <div className="sub-dato-container">
                    <p>Den gjennomføres</p>
                    <Datepicker 
                        locale={'nb'}
                        value={startDato}
                        onChange={settStartDato}/>
                </div>
                <div className="sub-dato-container">
                    <p>og varer til</p>
                    <Datepicker
                        locale={'nb'}
                        value={sluttDato}
                        onChange={settSluttDato}/>
                </div>
            </div>
            <div className="skal-publiseres-container">
                <h4>Skal undersøkelsen publiseres?</h4>
                <Radio label={'Ja'} name="skal-publiseres"/>
                <Radio label={'Nei'} name="skal-publiseres"/>
            </div>
        </div>
    )
}