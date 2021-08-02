import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

export const StegContext = createContext<[number, Dispatch<SetStateAction<number>>]>([
    0,
    () => null,
])

export function StegProvider({
    children,
}: {
    children: Array<React.ReactElement> | React.ReactElement
}): React.ReactElement {
    const [steg, settSteg] = useState<number>(0)

    return <StegContext.Provider value={[steg, settSteg]}>{children}</StegContext.Provider>
}
