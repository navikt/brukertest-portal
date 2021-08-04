import { Add } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import React, { ReactElement, useState } from 'react'
import JegForstårInputPunkt from '../../komponenter/lagSamtykkeskjema/JegForstårInputPunkt'

export default function LagJegForstårCheckbokser(): ReactElement {
    const [skalViseInputKomponent, settSkalViseInputKomponent] = useState<boolean>(false)

    let inputKomponent = <></>
    if (skalViseInputKomponent === true) {
        inputKomponent = <JegForstårInputPunkt />
    }
    return (
        <div>
            <h3>Jeg forstår:</h3>
            {inputKomponent}
            <Knapp onClick={() => {settSkalViseInputKomponent(true)}}>
                <Add className="legg-til-knapp-ikon"/>
                Legg til
            </Knapp>
        </div>
    )
}