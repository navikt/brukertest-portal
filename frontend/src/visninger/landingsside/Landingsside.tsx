import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function Landingsside(): React.ReactElement {
    return (
        <div className="landingsside">
            <Hovedomrade visFremgangsknapper={false} tittel={'Velkommen til NAVs innbyggerpanel'} />
        </div>
    )
}
