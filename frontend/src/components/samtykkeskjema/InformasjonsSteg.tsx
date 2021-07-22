import React, { ReactElement } from 'react'

export interface IInformasjonsStegInnhold {
    førsteTittel: string
    andreTittel?: string
    førsteAvsnitt: string
    andreAvsnitt: string
    ekstraAvsnitt?: string
}

export default function InformasjonsSteg({innformasjonsInnhold}: {innformasjonsInnhold: IInformasjonsStegInnhold}): ReactElement {
    return (
        <div className="informasjon-steg-container">
            <h4>{innformasjonsInnhold.førsteTittel}</h4>
            <p>{innformasjonsInnhold.førsteAvsnitt}</p>
            <h4>{innformasjonsInnhold.andreTittel}</h4>
            <p>{innformasjonsInnhold.andreAvsnitt}</p>
            <p>{innformasjonsInnhold.ekstraAvsnitt}</p>
        </div>
    )
}