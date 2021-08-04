import { Add } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import { Input } from 'nav-frontend-skjema'
import React, { ReactElement, useState } from 'react'

export default function LagJegForstårCheckbokser(): ReactElement {
    const [utfyldingsInput, settUtfyldingsInput] = useState<ReactElement>(<></>)
    const [gjeldendeJegForstårPunkt, settGjeldendeJegForstårPunkt] = useState<string>('')

    const påLeggTilKnappTrykk = () => {
        settUtfyldingsInput(
            <div className="jeg-forstaar-input-container">
                <Input 
                    className="jeg-forstaar-input" 
                    label="Jeg forstår punkt"
                    onChange={e => settGjeldendeJegForstårPunkt(e.target.value)}
                />
                <Knapp className="jeg-forstaar-legg-til-knapp">
                    <Add />
                </Knapp>
            </div>
        )
    }

    return (
        <div>
            <h3>Jeg forstår:</h3>
            {utfyldingsInput}
            <Knapp onClick={påLeggTilKnappTrykk}>
                <Add className="legg-til-knapp-ikon"/>
                Legg til
            </Knapp>
        </div>
    )
}