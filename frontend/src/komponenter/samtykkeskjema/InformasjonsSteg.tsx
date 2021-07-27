import React, { ReactElement } from 'react'
import { Undertittel, Normaltekst } from 'nav-frontend-typografi'

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
            <Undertittel>{informasjonsInnhold.førsteTittel}</Undertittel>
            <Normaltekst>{informasjonsInnhold.førsteAvsnitt}</Normaltekst>
            <Undertittel>{informasjonsInnhold.andreTittel}</Undertittel>
            <Normaltekst>{informasjonsInnhold.andreAvsnitt}</Normaltekst>
            <Undertittel>{informasjonsInnhold.tredjeTittel}</Undertittel>
            <Normaltekst>{informasjonsInnhold.tredjeAvsnitt}</Normaltekst>
        </div>
    )
}
