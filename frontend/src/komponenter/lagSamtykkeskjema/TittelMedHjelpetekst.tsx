import Hjelpetekst from 'nav-frontend-hjelpetekst'
import React, { ReactElement } from 'react'

export default function TittelMedHjelpetekst({tittel, hjelpetekst}: {tittel: string; hjelpetekst: string}): ReactElement {
    return(
        <div className="tittel-med-hjelpetekst">
            <h3>{tittel}</h3>
            <Hjelpetekst>{hjelpetekst}</Hjelpetekst>
        </div>
    )
}