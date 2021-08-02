import Hjelpetekst from 'nav-frontend-hjelpetekst'
import { TextareaControlled } from 'nav-frontend-skjema'
import React, { ReactElement } from 'react'

export default function LagSamtykkeskjema(): ReactElement {
    return (
        <div className="lag-samtykkeskjema">
            <div className="invitasjon-overskrift">
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
        </div>
    )
}