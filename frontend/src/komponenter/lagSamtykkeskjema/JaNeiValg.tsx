import { Radio, RadioGruppe } from 'nav-frontend-skjema'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'

export default function JaNeiValg({
    valgTittel,
    jaNeiStateDispatch
}: {
    valgTittel: string;
    jaNeiStateDispatch: Dispatch<SetStateAction<boolean>>
}): ReactElement {
    const oppdaterJaNeiState = (jaEllerNei: boolean) => {
        if (jaEllerNei) {
            jaNeiStateDispatch(true)
        } 
        if (!jaEllerNei) {
            jaNeiStateDispatch(false)
        }
    }

    return (
        <RadioGruppe 
            legend={<h3>{valgTittel}</h3>} 
            className="ja-nei-valg-container"
        >
            <Radio 
                label={'Ja'} 
                name="ja-nei-valg"
                onClick={
                    () => {
                        oppdaterJaNeiState(true)
                    }
                }
            />
            <Radio 
                label={'Nei'} 
                name="ja-nei-valg"
                onClick={
                    () => {
                        oppdaterJaNeiState(false)
                    }
                }
            />
        </RadioGruppe>
    )
}