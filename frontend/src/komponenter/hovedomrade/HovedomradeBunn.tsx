import React, { ReactElement, useContext } from 'react'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'
import { StegContext } from '../../kjerne/state/StegContext'
import { useAppState } from '../../kjerne/state/AppStateContext'

export default function HovedomradeBunn(props: HovedomradeProps): React.ReactElement {
    const { erLoggetInn } = useAppState()

    const [steg, settSteg] = useContext(StegContext)

    const hoppTilNesteSteg = () => {
        settSteg(steg + 1)
    }

    const hoppTilForrigeSteg = () => {
        settSteg(steg - 1)
    }

    let tilbakeKnapp: ReactElement = <Tilbakeknapp onClick={hoppTilForrigeSteg} />
    let nesteKnapp: ReactElement = <Nesteknapp onClick={hoppTilNesteSteg} />

    if (steg === 0) {
        tilbakeKnapp = <></>
        nesteKnapp = <Nesteknapp onClick={hoppTilNesteSteg} className="nesteknappHøyre"/>
    }

    const Knapper = () => (
        <div className="hovedomradeBunn">
            {tilbakeKnapp}
            {nesteKnapp}
        </div>
    )

    return <div>{erLoggetInn ? <Knapper /> : null}</div>
}
