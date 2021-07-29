import Stegindikator from 'nav-frontend-stegindikator/lib/stegindikator'
import React, { useContext } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'

export default function SamtykkeStegindikator(): React.ReactElement {
    const [steg] = useContext(StegContext)
    if (steg >= 0 && steg < 7)
        return (
            <Stegindikator
                steg={[
                    { label: 'Hva skal undersøkelsen brukes til?', index: 0 },
                    { label: 'Hvem er vi og hvilke metoder bruker vi?', index: 1 },
                    { label: 'Om personopplysninger', index: 2 },
                    { label: 'Om taushetsplikt og anonymisering', index: 3 },
                    { label: 'Om dine rettigheter', index: 4 },
                    { label: 'Jeg forstår - erklæring', index: 5 },
                    { label: 'Utfyllingssteg', index: 6 },
                ]}
                aktivtSteg={steg}
            />
        )
    else return <></>
}
