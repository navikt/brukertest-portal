import React, { ReactElement, ReactNode, useContext } from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import Stegindikator from 'nav-frontend-stegindikator'
import { SamtykkeContext, SamtykkeProvider } from '../../kjerne/state/SamtykkeskjemaContext'
import { Dispatch } from 'react'
import { useReducer } from 'react'

export default function Samtykkeskjema(): React.ReactElement {
    const [aktivtSteg] = useContext(SamtykkeContext)

    return (
        <SamtykkeProvider>
            <div className="samtykkeskjema">
                <Hovedomrade visFremgangsknapper={true} tittel={'Samtykke til intervju'} />
                {console.log(aktivtSteg)}
                <div className="steg">
                    <Stegindikator
                        steg={[
                            { label: 'Dette steget først', index: 0 },
                            { label: 'Og så dette steget', index: 1 },
                            { label: 'Deretter må du gjøre dette 1', index: 2 },
                            { label: 'Deretter må du gjøre dette 2', index: 3 },
                            { label: 'Deretter må du gjøre dette 3', index: 4 },
                            { label: 'Deretter må du gjøre dette 4', index: 5 },
                            { label: 'Konklusjonen', index: 6 },
                        ]}
                        aktivtSteg={aktivtSteg}
                    />
                </div>
            </div>
        </SamtykkeProvider>
    )
}

type UseSamtykkeskjemaStegReturn = {
    samtykkeskjemaStegStates: SamtykkeskjemaStegState | undefined
    dispatchSamtykkeskjemaSteg: Dispatch<SamtykkeskjemaAction>
}

export type SamtykkeskjemaAction = {
    index: number
}

export interface SamtykkeskjemaStegState {
    komponent: ReactElement
}

function samtykkeskjemaReducer(
    state: SamtykkeskjemaStegState,
    action: SamtykkeskjemaAction,
): SamtykkeskjemaStegState {
    switch (action.index) {
        case 0:
            break
        case 1:
            // gjøre klar data, og returnere den til komponentet
            console.log('kom seg videre til steg 1')
            break
    }
    //returnere komponent til slutt
    return state
}

export function useSamtykkeskjemaSteg(
    initalState?: SamtykkeskjemaStegState,
): UseSamtykkeskjemaStegReturn {
    const [samtykkeskjemaStegStates, dispatchSamtykkeskjemaSteg] = useReducer(
        samtykkeskjemaReducer,
        initalState!,
    )
    return { samtykkeskjemaStegStates, dispatchSamtykkeskjemaSteg }
}
