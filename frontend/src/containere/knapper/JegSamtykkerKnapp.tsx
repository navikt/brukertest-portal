import { Hovedknapp } from 'nav-frontend-knapper'
import React, { ReactElement, useContext } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'

export default function JegSamtykkerKnapp(): ReactElement {
    const [steg, settSteg] = useContext(StegContext)

    const hoppTilNesteSteg = () => {
        settSteg(steg + 1)
    }

    return <Hovedknapp onClick={hoppTilNesteSteg}>Jeg samtykker</Hovedknapp>
}
