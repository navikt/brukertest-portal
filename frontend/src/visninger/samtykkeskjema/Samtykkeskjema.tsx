import React from 'react'
import {
    HovedområdeIkon,
    HovedområdeTittel,
    SamtykkeskjemaSteg,
} from '../../containere/samtykkeskjema/SamtykkeskjemaSteg'
import SamtykkeStegindikator from '../../containere/samtykkeskjema/SamtykkeStegindikator'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'

export default function Samtykkeskjema(): React.ReactElement {
    return (
        <div className="samtykkeskjema">
            <Hovedomrade
                tittel={HovedområdeTittel()}
                hovedInnhold={<SamtykkeskjemaSteg />}
                toppIkon={HovedområdeIkon()}
            />
            <div className="steg">
                <SamtykkeStegindikator />
            </div>
        </div>
    )
}
