import React, { ReactElement } from 'react'
import { Undertittel, Normaltekst } from 'nav-frontend-typografi'

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
            <Undertittel>{informasjonsInnhold.førsteTittel}</Undertittel>
            <Normaltekst>{informasjonsInnhold.førsteAvsnitt}</Normaltekst>
            <Undertittel>{informasjonsInnhold.andreTittel}</Undertittel>
            <Normaltekst>{informasjonsInnhold.andreAvsnitt}</Normaltekst>
            <Normaltekst>{informasjonsInnhold.ekstraAvsnitt}</Normaltekst>
        </div>
    )
}
