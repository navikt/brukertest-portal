import { CheckboxGruppe, Checkbox } from 'nav-frontend-skjema'
import { Undertittel } from 'nav-frontend-typografi'
import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'

export default function ForståttSjekkSteg({
    jegForstår,
    settJegForstår,
    erNesteTrykket,
}: {
    jegForstår: boolean
    settJegForstår: Dispatch<SetStateAction<boolean>>
    erNesteTrykket: boolean
}): ReactElement {
    const [sjekket, settSjekket] = useState([false, false, false, false])

    // Setter riktig checkboks til å være huket av
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const boxPressed: number = Number.parseInt(e.target.id)

        if (sjekket[boxPressed]) {
            const kopi = [...sjekket]
            kopi[boxPressed] = false
            settSjekket(kopi)
        } else {
            const kopi = [...sjekket]
            kopi[boxPressed] = true
            settSjekket(kopi)
        }
    }

    // Sjekker om alle verdier i arrayen "sjekket" er true
    function harTrykketAlle() {
        const trueSjekk = (verdi: boolean) => verdi
        if (sjekket.every(trueSjekk)) {
            settJegForstår(true)
        } else {
            settJegForstår(false)
        }
    }

    // Sender feilmelding dersom ikke alle checkboxer er huket av når man forsøker å trykke seg videre
    function feilmeldingSjekk() {
        if (erNesteTrykket && jegForstår === false) {
            return 'Alle checkbokser må være huket av før du kan gå videre'
        } else {
            return false
        }
    }

    useEffect(() => {
        harTrykketAlle()
    })

    return (
        <div className="forstaatt-sjekk-steg-container">
            <Undertittel>Jeg forstår:</Undertittel>
            <CheckboxGruppe feil={feilmeldingSjekk()}>
                <Checkbox
                    label={'At det er frivillig å delta, og at jeg når som helst kan trekke meg'}
                    value={'trekke'}
                    id={'0'}
                    onChange={handleChange}
                />
                <Checkbox
                    label={'At jeg når som helst kan avstå fra å svare på spørsmål'}
                    value={'avstå'}
                    id={'1'}
                    onChange={handleChange}
                />
                <Checkbox
                    label={'At jeg når som helst kan trekke tilbake det jeg har sagt'}
                    value={'trekke'}
                    id={'2'}
                    onChange={handleChange}
                />
                <Checkbox
                    label={'At jeg når som helst kan be dere slette mine personlige data'}
                    value={'slette'}
                    id={'3'}
                    onChange={handleChange}
                />
            </CheckboxGruppe>
        </div>
    )
}
