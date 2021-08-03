import { Add } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import { Input } from 'nav-frontend-skjema'
import React, { ReactElement, useState } from 'react'

export default function LagJegForstårCheckbokser(): ReactElement {
    const [utfyldingsInput, settUtfyldingsInput] = useState<ReactElement>(<></>)

    const påLeggTilKnappTrykk = () => {
        settUtfyldingsInput(
            <div className="jeg-forstaar-input-container">
                <Input className="jeg-forstaar-input" placeholder="Jeg forstår punkt"/>
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