import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { Input } from 'nav-frontend-skjema'
import { Knapp } from 'nav-frontend-knapper'
import { Add } from '@navikt/ds-icons'

export default function JegForstårInputPunkt({jegForstårPunkter, settJegForstårPunkter}: {jegForstårPunkter: Array<string>; settJegForstårPunkter: Dispatch<SetStateAction<Array<string>>>}): ReactElement {
    const [gjeldendeJegForstårPunkt, settGjeldendeJegForstårPunkt] = useState<string>('')

    const påJegForstårInput = (e: ChangeEvent<HTMLInputElement>) => {        
        const verdi = e.target.value
        settGjeldendeJegForstårPunkt(verdi)
    }

    const påLeggTilJegForstårPunkt = () => {
        const kopi = [...jegForstårPunkter]
        kopi.push(gjeldendeJegForstårPunkt)
        settJegForstårPunkter(kopi)
    }

    return(
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
    )
}