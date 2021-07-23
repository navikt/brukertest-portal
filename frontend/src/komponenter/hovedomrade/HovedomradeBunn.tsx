import React, { useContext, useState } from 'react'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'
import { SamtykkeContext } from '../../kjerne/state/SamtykkeskjemaContext'
import { useSamtykkeskjemaSteg } from '../../visninger/samtykkeskjema/Samtykkeskjema'

export default function HovedomradeBunn(props: HovedomradeProps): React.ReactElement {
    //const [hoppTilForrigeSteg, hoppTilNesteSteg] = useContext(SamtykkeContext)

    const { samtykkeskjemaStegStates, dispatchSamtykkeskjemaSteg } = useSamtykkeskjemaSteg()

    const [steg, settSteg] = useState<number>(0)

    const hoppTilNesteSteg = () => {
        if (steg >= 0 && steg <= 6) {
            settSteg(steg + 1)
            dispatchSamtykkeskjemaSteg({ index: steg })
        }
    }

    const hoppTilForrigeSteg = () => {
        if (steg >= 0 && steg <= 6) {
            settSteg(steg - 1)
            dispatchSamtykkeskjemaSteg({ index: steg })
        }
    }

    const Knapper = () => (
        <div className="hovedomradeBunn">
            <Tilbakeknapp onClick={hoppTilForrigeSteg} />
            <Nesteknapp onClick={hoppTilNesteSteg} />
        </div>
    )

    return <div>{props.visFremgangsknapper ? <Knapper /> : null}</div>
}
