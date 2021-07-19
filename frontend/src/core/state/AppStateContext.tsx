import React, { useState, createContext } from 'react'

export const AppStateContext = createContext<any>(false)

export const AppStateProvider = (props: any) => {
    const [harLoggetInn, setHarLoggetInn] = useState<boolean>(false)

    return (
        <AppStateContext.Provider value={[harLoggetInn, setHarLoggetInn]}>
            {props.children}
        </AppStateContext.Provider>
    )
}
