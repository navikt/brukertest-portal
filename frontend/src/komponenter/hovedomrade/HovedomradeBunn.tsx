import React, { useContext, useState } from 'react'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'
import { StegContext } from '../../visninger/samtykkeskjema/Samtykkeskjema'

export default function HovedomradeBunn(props: HovedomradeProps): React.ReactElement {
    //const [hoppTilForrigeSteg, hoppTilNesteSteg] = useContext(SamtykkeContext)

    const [state, dispatch] = useContext(StegContext)

    const hoppTilNesteSteg = () => {
        dispatch({ type: 'increment'})
    }

    const hoppTilForrigeSteg = () => {
        dispatch({ type: 'decrement'})
    }

    const Knapper = () => (
        <div className="hovedomradeBunn">
            <Tilbakeknapp onClick={hoppTilForrigeSteg} />
            <Nesteknapp onClick={hoppTilNesteSteg} />
        </div>
    )

    return <div>{props.visFremgangsknapper ? <Knapper /> : null}</div>
}
