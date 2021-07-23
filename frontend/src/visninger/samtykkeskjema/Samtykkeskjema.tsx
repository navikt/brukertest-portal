import React, { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useReducer, useState } from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import Stegindikator from 'nav-frontend-stegindikator'

export default function Samtykkeskjema(): React.ReactElement {
    const [state, dispatch] = useContext(StegContext)
    
    return (
        
        <div className="samtykkeskjema">
            <Hovedomrade visFremgangsknapper={true} tittel={'Samtykke til intervju'} />
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
                    aktivtSteg={state.steg}
                />
            </div>
        </div>

    )
}

export const stegReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'increment': {
            return {
                ...state,
                steg: state.steg + 1
            }
        }
        case 'decrement': {
            return {
                ...state,
                steg: state.steg - 1
            }
        }
        default: 
            return state
    }
}

export const initalStegState = {
    steg: 0
}

export const StegContext: any = createContext({
    state: initalStegState,
    dispatch: () => null
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const StegProvider = ({ children }: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, reducer] = useReducer(stegReducer, initalStegState)

    return (
        <StegContext.Provider value={[state, reducer]}>
            {children}
        </StegContext.Provider>
    )
}