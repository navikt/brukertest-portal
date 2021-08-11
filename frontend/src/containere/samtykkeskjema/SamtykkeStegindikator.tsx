import Stegindikator from 'nav-frontend-stegindikator/lib/stegindikator'
import React, { useContext } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'

export default function SamtykkeStegindikator(): React.ReactElement {
    const [steg] = useContext(StegContext)
    if (steg >= 0 && steg < 6)
        return (
            <Stegindikator
                steg={[
                    { label: 'Hva skal undersøkelsen brukes til?', index: 0 },
                    { label: 'Hvem er vi og hvilke metoder bruker vi?', index: 1 },
                    { label: 'Om personopplysninger', index: 2 },
                    { label: 'Om dine rettigheter', index: 3 },
                    { label: 'Jeg forstår - erklæring', index: 4 },
                    { label: 'Utfyllingssteg', index: 5 },
                ]}
                aktivtSteg={steg}
            />
        )
    else return <></>
}
