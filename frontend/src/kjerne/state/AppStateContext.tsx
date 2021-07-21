import React, { useState, createContext, SetStateAction, Dispatch, useEffect } from 'react'
import { useContext } from 'react'

export const AppStateContext = createContext<(boolean | Dispatch<SetStateAction<boolean>>)[]>([])

export enum AuthLevel {
    none,
    deltaker,
    administrator,
}

export interface IAppState {
    erLoggetInn: boolean
    authLevel: AuthLevel
}

export const appState: IAppState = {
    erLoggetInn: false,
    authLevel: AuthLevel.none,
}
/**
 * Beskriver metoder ansvarlig for å manipulere global applikasjonsstate.
 */
export interface IAppStateDispatcher {
    /**
     * Oppdaterer applikasjonsstate til innlogget,
     * og setter korrekt auth-level
     */
    settLoggInnState: (authlevel: AuthLevel) => void
    /**
     * Logger ut bruker
     */
    settLoggUtState: () => void
}
/**
 * Setter opp initiell state når applikasjonen kjøres for første gang
 * - Setter logget-inn state når applikasjonen starter
 */
function settOppInitiellState() {
    const state = { ...appState }

    state.erLoggetInn = false
    state.authLevel = AuthLevel.deltaker

    return state
}

const appContext = createContext(appState)
const appStateDispatch = createContext({} as IAppStateDispatcher)

/**
 * Gir app state context til alle child-komponenter som dette komponentet wrapper
 */
function ProvideAppContext({
    children,
}: {
    children: Array<React.ReactElement> | React.ReactElement
}): React.ReactElement {
    const [state, setState] = useState(settOppInitiellState)
    const dispatcher: IAppStateDispatcher = {
        settLoggInnState: (authLevel: AuthLevel) => {
            setState({ ...state, erLoggetInn: true, authLevel })
        },
        settLoggUtState: () => {
            setState({ ...state, erLoggetInn: false, authLevel: AuthLevel.none })
        },
    }

    useEffect(() => {
        // Gjøre alle sjekker for å forsikre at man faktisk er logget inn
    })

    return (
        <appContext.Provider value={state}>
            <appStateDispatch.Provider value={dispatcher}>{children}</appStateDispatch.Provider>
        </appContext.Provider>
    )
}
/**
 * Hook for å få tilgang til applikasjonens state
 * Denne bør ikke endres
 */
const useAppState = (): IAppState => {
    return useContext(appContext)
}
/**
 * Hook for å bruke app state dispatcher. Dispatcherne er metoder for å manipulere applikasjonens state
 */
const useAppStateDispatcher = (): IAppStateDispatcher => {
    return useContext(appStateDispatch)
}

export { ProvideAppContext, useAppState, useAppStateDispatcher }
