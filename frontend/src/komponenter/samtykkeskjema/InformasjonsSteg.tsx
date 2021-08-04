import React, { ReactElement } from 'react'

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
            <p className="typo-normal">{informasjonsInnhold.førsteAvsnitt}</p>
            <h2 className="typo-undertittel">{informasjonsInnhold.andreTittel}</h2>
            <p className="typo-normal">{informasjonsInnhold.andreAvsnitt}</p>
            <h2 className="typo-undertittel">{informasjonsInnhold.tredjeTittel}</h2>
            <p className="typo-normal">{informasjonsInnhold.tredjeAvsnitt}</p>
        </div>
    )
}
