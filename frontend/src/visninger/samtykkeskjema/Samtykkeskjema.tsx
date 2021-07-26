import Stegindikator from 'nav-frontend-stegindikator'
import React, { useContext } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function Samtykkeskjema(): React.ReactElement {
    const [steg] = useContext(StegContext)

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
                    aktivtSteg={steg}
                />
            </div>
        </div>

    )
}

