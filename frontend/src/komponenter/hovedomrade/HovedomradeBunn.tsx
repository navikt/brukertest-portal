import React, { ReactElement, useContext } from 'react'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'
import { StegContext } from '../../kjerne/state/StegContext'
import { useAppState } from '../../kjerne/state/AppStateContext'
import JegSamtykkerKnapp from '../../containere/knapper/JegSamtykkerKnapp'
import LoggUtKnappHovedinnhold from '../../containere/knapper/LoggUtKnappHovedinnhold'

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
    let jegSamtykkerKnapp: ReactElement = <></>
    let loggUtKnapp: ReactElement = <></>

    if (steg === 0) {
        tilbakeKnapp = <div></div>
        nesteKnapp = <Nesteknapp onClick={hoppTilNesteSteg} />
    }

    if (steg === 6) {
        nesteKnapp = <></>
        jegSamtykkerKnapp = <JegSamtykkerKnapp />
    }
    if (steg === 7) {
        nesteKnapp = <></>
        tilbakeKnapp = <div></div>
        loggUtKnapp = <LoggUtKnappHovedinnhold />
    }

    const Knapper = () => (
        <div className="hovedomrade-bunn">
            {tilbakeKnapp}
            {nesteKnapp}
            {jegSamtykkerKnapp}
            {loggUtKnapp}
        </div>
    )

    return <div>{erLoggetInn ? <Knapper /> : null}</div>
}
