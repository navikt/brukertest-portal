import { Datepicker } from 'nav-datovelger'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'

export interface IVelgStartSluttDato {
    startDato: string
    settStartDato: Dispatch<SetStateAction<string>>
    sluttDato: string
    settSluttDato: Dispatch<SetStateAction<string>>
}

export default function VelgStartSluttDato({startDato, settStartDato, sluttDato, settSluttDato}: IVelgStartSluttDato): ReactElement {
    return(
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
    )
}