import React, { createContext, useState } from 'react'

export const SamtykkeContext = createContext<any>([])

export function SamtykkeProvider({
    children,
}: {
    children: Array<React.ReactElement> | React.ReactElement
}): React.ReactElement {
    const [aktivtSteg, settAktivtSteg] = useState<number>(0)

    const hoppTilNesteSteg = () => {
        const nesteSteg = aktivtSteg + 1
        settAktivtSteg(nesteSteg)
        //console.log(aktivtSteg)
    }

    const hoppTilForrigeSteg = () => {
        const forrigeSteg = aktivtSteg - 1
        settAktivtSteg(forrigeSteg)
        //console.log(aktivtSteg)
    }

    return (
        <SamtykkeContext.Provider value={[hoppTilForrigeSteg, hoppTilNesteSteg, aktivtSteg]}>
            {children}
        </SamtykkeContext.Provider>
    )
}
