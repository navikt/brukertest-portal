import React from 'react'
import { People } from '@navikt/ds-icons'
import { Flatknapp } from 'nav-frontend-knapper'
import { useHistory } from 'react-router-dom'
import { useAppState } from '../../kjerne/state/AppStateContext'

export default function BrukerKnappToppBar(): React.ReactElement {
    const history = useHistory()
    const { authLevel } = useAppState()

    if (authLevel === 1) {
        return (
            <Flatknapp className="bruker-knapp" onClick={() => history.push('/profil')}>
                <span>Ola Nordmann</span>
                <People className="knapp-ikon" />
            </Flatknapp>
        )
    }
    if (authLevel === 2) {
        return (
            <Flatknapp className="bruker-knapp" onClick={() => history.push('/admin/profil')}>
                <span>Admin Istrator</span>
                <People className="knapp-ikon" />
            </Flatknapp>
        )
    } else {
        return <div></div>
    }
}
