import React from 'react'
import Hovedomrade from '../../components/hovedomrade/Hovedomrade'

export default function Samtykkeskjema(): React.ReactElement {
    return (
        <div className="samtykkeskjema">
            <Hovedomrade visFremgangsknapper={true} tittel={'Samtykke til intervju'} />
        </div>
    )
}
