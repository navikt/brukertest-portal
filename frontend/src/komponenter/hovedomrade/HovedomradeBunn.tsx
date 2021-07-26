import React, { useContext } from 'react'
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

    const Knapper = () => (
        <div className="hovedomradeBunn">
            <Tilbakeknapp onClick={hoppTilForrigeSteg} />
            <Nesteknapp onClick={hoppTilNesteSteg} />
        </div>
    )

    return <div>{erLoggetInn ? <Knapper /> : null}</div>
}
