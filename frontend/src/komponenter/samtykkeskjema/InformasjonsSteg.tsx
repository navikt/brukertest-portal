import React, { ReactElement } from 'react'
import { Normaltekst } from 'nav-frontend-typografi'

export interface IInformasjonsStegInnhold {
    førsteTittel: string
    andreTittel?: string
    førsteAvsnitt: string
    andreAvsnitt: string
    tredjeTittel?: string
    tredjeAvsnitt?: string
}

export default function InformasjonsSteg(
    informasjonsInnhold: IInformasjonsStegInnhold,
): ReactElement {
    return (
        <div className="informasjon-steg-container">
            <h2 className="typo-undertittel">{informasjonsInnhold.førsteTittel}</h2>
            <Normaltekst>{informasjonsInnhold.førsteAvsnitt}</Normaltekst>
            <h2 className="typo-undertittel">{informasjonsInnhold.andreTittel}</h2>
            <Normaltekst>{informasjonsInnhold.andreAvsnitt}</Normaltekst>
            <h2 className="typo-undertittel">{informasjonsInnhold.tredjeTittel}</h2>
            <Normaltekst>{informasjonsInnhold.tredjeAvsnitt}</Normaltekst>
        </div>
    )
}
