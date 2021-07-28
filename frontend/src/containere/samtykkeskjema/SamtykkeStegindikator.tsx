import Stegindikator from 'nav-frontend-stegindikator/lib/stegindikator'
import React, { useContext } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'

export default function SamtykkeStegindikator(): React.ReactElement {
    const [steg] = useContext(StegContext)
    if (steg >= 0 && steg < 7)
        return (
            <Stegindikator
                steg={[
                    { label: 'Informasjon om ', index: 0 },
                    { label: 'Og så dette steget', index: 1 },
                    { label: 'Deretter må du gjøre dette 1', index: 2 },
                    { label: 'Deretter må du gjøre dette 2', index: 3 },
                    { label: 'Deretter må du gjøre dette 3', index: 4 },
                    { label: 'Deretter må du gjøre dette 4', index: 5 },
                    { label: 'Konklusjonen', index: 6 },
                ]}
                aktivtSteg={steg}
            />
        )
    else return <></>
}
