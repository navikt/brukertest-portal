import { Add } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import { Input } from 'nav-frontend-skjema'
import React, { ChangeEvent, ReactElement, useState } from 'react'
import JegForstårPunkt from './JegForstårPunkt'

export default function JegForstårInputPunkt(): ReactElement {
    const [gjeldendeJegForstårPunkt, settGjeldendeJegForstårPunkt] = useState<string>('')
    const [jegForstårPunkter, settJegForstårPunkter] = useState<Array<string>>([])
    const [jegForstårKomponenter, settJegForstårKomponenter] = useState<Array<ReactElement>>([])

    const påJegForstårInput = (e: ChangeEvent<HTMLInputElement>) => {
        settGjeldendeJegForstårPunkt(e.target.value)
    }

    const påLeggTilJegForstårPunkt = () => {
        const kopi = [...jegForstårPunkter]
        kopi.push(gjeldendeJegForstårPunkt)
        settJegForstårPunkter(kopi)

        const liste: ReactElement[] = []

        for (let i = 0; i < jegForstårPunkter.length; i++) {
            liste.push(<JegForstårPunkt key={i} label={jegForstårPunkter[i]}/>)
        }

        settJegForstårKomponenter(liste)
    }

    return(
        <div>
            {jegForstårKomponenter}
            <div className="jeg-forstaar-input-container">
                <Input 
                    className="jeg-forstaar-input" 
                    label="Jeg forstår punkt"
                    value={gjeldendeJegForstårPunkt}
                    onChange={påJegForstårInput}
                />
                <Knapp 
                    className="jeg-forstaar-legg-til-knapp"
                    onClick={påLeggTilJegForstårPunkt}    
                >
                    <Add />
                </Knapp>
            </div>
        </div>
    )
}