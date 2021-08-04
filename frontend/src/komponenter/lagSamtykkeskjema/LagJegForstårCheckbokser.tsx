import React, { ReactElement } from 'react'
import JegForstårInputPunkt from '../../komponenter/lagSamtykkeskjema/JegForstårInputPunkt'

export default function LagJegForstårCheckbokser(): ReactElement {
    return (
        <div>
            <h3>Jeg forstår:</h3>
            <JegForstårInputPunkt />
        </div>
    )
}