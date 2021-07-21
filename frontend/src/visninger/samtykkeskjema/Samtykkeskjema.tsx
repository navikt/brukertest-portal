import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import Stegindikator from 'nav-frontend-stegindikator'

export default function Samtykkeskjema(): React.ReactElement {
    return (
        <div className="samtykkeskjema">
            <Hovedomrade visFremgangsknapper={true} tittel={'Samtykke til intervju'} />
            <div className="steg">
                <Stegindikator
                    steg={[
                        { label: 'Dette steget først', aktiv: true, index: 1 },
                        { label: 'Og så dette steget', index: 2 },
                        { label: 'Deretter må du gjøre dette 1', index: 3 },
                        { label: 'Deretter må du gjøre dette 2', index: 4 },
                        { label: 'Deretter må du gjøre dette 3', index: 5 },
                        { label: 'Deretter må du gjøre dette 4', index: 6 },
                        { label: 'Konklusjonen', index: 7 },
                    ]}
                    autoResponsiv
                />
            </div>
        </div>
    )
}
