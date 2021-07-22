import React, { useContext } from 'react'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { HovedomradeProps } from './Hovedomrade'
import { SamtykkeContext } from '../../kjerne/state/SamtykkeskjemaContext'
import { useSamtykkeskjemaSteg } from '../../visninger/samtykkeskjema/Samtykkeskjema'

export default function HovedomradeBunn(props: HovedomradeProps): React.ReactElement {
    //const [hoppTilForrigeSteg, hoppTilNesteSteg] = useContext(SamtykkeContext)

    const { samtykkeskjemaStegStates, dispatchSamtykkeskjemaSteg } = useSamtykkeskjemaSteg()

    const hoppTilNesteSteg = () => {
        dispatchSamtykkeskjemaSteg({ index: 1 })
    }

    const hoppTilForrigeSteg = () => {
        dispatchSamtykkeskjemaSteg({ index: 0 })
    }

    const Knapper = () => (
        <div className="hovedomradeBunn">
            <Tilbakeknapp onClick={hoppTilForrigeSteg} />
            <Nesteknapp onClick={hoppTilNesteSteg} />
        </div>
    )

    return <div>{props.visFremgangsknapper ? <Knapper /> : null}</div>
}
