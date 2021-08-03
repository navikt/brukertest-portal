import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import { Checkbox, CheckboxGruppe, Input, SkjemaGruppe } from 'nav-frontend-skjema'
import { Element, Normaltekst } from 'nav-frontend-typografi'

export default function DeltakerUtfyllingSteg({
    skjemaUtfylt,
    settSkjemaUtfylt,
    erNesteTrykket,
}: {
    skjemaUtfylt: boolean
    settSkjemaUtfylt: Dispatch<SetStateAction<boolean>>
    erNesteTrykket: boolean
}): ReactElement {
    const [checkboxSjekket, settCheckboxSjekket] = useState(false)
    const [epost, settEpost] = useState('')
    const [fornavn, settFornavn] = useState('')
    const [etternavn, settEtternavn] = useState('')

    // Håndterer checkboks-trykk
    function checkboxPressHåndtering() {
        if (checkboxSjekket) {
            settCheckboxSjekket(false)
        } else {
            settCheckboxSjekket(true)
        }
    }

    // Lytter til input i fornavn-feltet
    function fornavnHåndtering(e: React.ChangeEvent<HTMLInputElement>) {
        settFornavn(e.target.value)
    }

    // Lytter til input i etternavn-feltet
    function etternavnHåndtering(e: React.ChangeEvent<HTMLInputElement>) {
        settEtternavn(e.target.value)
    }

    // Lytter til input i epost-feltet
    function epostHåndtering(e: React.ChangeEvent<HTMLInputElement>) {
        settEpost(e.target.value)
    }

    // Validerer epost-feltet
    function epostValidering(epost: string) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(epost).toLowerCase())
    }

    // Validerer hele skjemaet for å kunne trykke seg videre
    function skjemaValidering() {
        if (epostValidering(epost) && checkboxSjekket) {
            settSkjemaUtfylt(true)
        } else settSkjemaUtfylt(false)
    }

    useEffect(() => {
        skjemaValidering()
    })

    // Håndterer feilmeldinger i skjemaet
    function epostFeilmeldingSjekk() {
        if (erNesteTrykket && epostValidering(epost) === false) {
            return 'Skriv inn riktig e-postadresse for å fortsette. Eksempel: navn@epost.no'
        } else {
            return false
        }
    }

    function checkboxFeilmeldingSjekk() {
        if (erNesteTrykket && checkboxSjekket === false) {
            return 'Denne checkboksen må hukes av for å kunne gi samtykke'
        } else {
            return false
        }
    }

    function fornavnFeilmeldingSjekk() {
        if (erNesteTrykket && fornavn === '') {
            return 'Skriv inn ditt fornavn'
        } else {
            return false
        }
    }

    function etternavnFeilmeldingSjekk() {
        if (erNesteTrykket && etternavn === '') {
            return 'Skriv inn ditt etternavn'
        } else {
            return false
        }
    }

    return (
        <>
            <div className="navn-input-container">
                <Input
                    label="Fornavn"
                    className="navn-input"
                    onChange={fornavnHåndtering}
                    feil={fornavnFeilmeldingSjekk()}
                />
                <Input
                    label="Etternavn"
                    className="navn-input"
                    onChange={etternavnHåndtering}
                    feil={etternavnFeilmeldingSjekk()}
                />
            </div>
            <div className="epost-input">
                <Input
                    label="E-postadresse"
                    id="epostfelt"
                    onChange={epostHåndtering}
                    feil={epostFeilmeldingSjekk()}
                />
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
                    value={'brukertest'}
                    id={'brukertest1'}
                    onChange={checkboxPressHåndtering}
                    feil={checkboxFeilmeldingSjekk()}
                />
                <Checkbox
                    label={'Ja, jeg godtar at det kan bli gjort lydopptak'}
                    value={'intervju'}
                    id={'intervju1'}
                />
            </CheckboxGruppe>
        </>
    )
}
