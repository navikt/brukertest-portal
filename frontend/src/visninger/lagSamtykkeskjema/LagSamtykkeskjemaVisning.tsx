import React, { ReactElement } from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { FileContent } from '@navikt/ds-icons'
import LagSamtykkeskjema from '../../containere/lagSamtykkeskjema/LagSamtykkeskjema'

export default function LagSamtykkeskjemaVisning(): ReactElement {
    return (
        <div className="lag-samtykkeskjema-visning">
            <Hovedomrade 
                tittel="Samtykke til intervju"
                toppIkon={<FileContent />}
                hovedInnhold={<LagSamtykkeskjema />}
            />
        </div>
    )
}