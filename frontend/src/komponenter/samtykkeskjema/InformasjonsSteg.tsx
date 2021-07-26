import React, { ReactElement } from 'react'
import { Element, Normaltekst } from 'nav-frontend-typografi'

export interface IInformasjonsStegInnhold {
    førsteTittel: string
    andreTittel?: string
    førsteAvsnitt: string
    andreAvsnitt: string
    ekstraAvsnitt?: string
}

export default function InformasjonsSteg(
    informasjonsInnhold: IInformasjonsStegInnhold,
): ReactElement {
    return (
        <div className="informasjon-steg-container">
            <Element>{informasjonsInnhold.førsteTittel}</Element>
            <Normaltekst>{informasjonsInnhold.førsteAvsnitt}</Normaltekst>
            <Element>{informasjonsInnhold.andreTittel}</Element>
            <Normaltekst>{informasjonsInnhold.andreAvsnitt}</Normaltekst>
            <Normaltekst>{informasjonsInnhold.ekstraAvsnitt}</Normaltekst>
        </div>
    )
}
