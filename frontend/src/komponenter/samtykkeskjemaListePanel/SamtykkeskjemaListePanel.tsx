import React from 'react'
import { Delete, Edit, Eye } from '@navikt/ds-icons'
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel'
import { Flatknapp } from 'nav-frontend-knapper'
import { Element } from 'nav-frontend-typografi'
import KopierLenke from '../kopierLenke/KopierLenke'

export default function SamtykkeskjemaListePanel(props: {
    skjemanavn: string
}): React.ReactElement {
    return (
        <>
            <Ekspanderbartpanel
                tittel={<Element>{props.skjemanavn}</Element>}
                className="ekspanderbart-panel"
            >
                <KopierLenke />
                <div className="skjemaknapper">
                    <Flatknapp>
                        <Eye />
                        <span>Se samtykkeskjema</span>
                    </Flatknapp>
                    <Flatknapp>
                        <Edit />
                        <span>Rediger</span>
                    </Flatknapp>
                    <Flatknapp>
                        <Delete />
                        <span>Slett</span>
                    </Flatknapp>
                </div>
            </Ekspanderbartpanel>
        </>
    )
}
