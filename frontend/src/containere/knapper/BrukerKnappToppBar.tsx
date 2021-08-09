import React from 'react'
import { People } from '@navikt/ds-icons'
import { Flatknapp } from 'nav-frontend-knapper'
import { useHistory } from 'react-router-dom'
import { AuthLevel, useAppState, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function BrukerKnappToppBar(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()
    const history = useHistory()
    const { authLevel, erLoggetInn } = useAppState()

    const oppdaterLoggInnState = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)

        history.push('/admin/profil')
    }

    if (erLoggetInn && authLevel === 1) {
        return (
            <Flatknapp className="bruker-knapp" onClick={() => history.push('/profil')}>
                <span>Ola Nordmann</span>
                <People style={{ height: '1.5rem', width: '1.375rem', marginLeft: '0.75rem' }} />
            </Flatknapp>
        )
    }
    if (erLoggetInn && authLevel === 2) {
        return (
            <Flatknapp className="bruker-knapp" onClick={() => history.push('/admin/profil')}>
                <span>Admin Istrator</span>
                <People style={{ height: '1.5rem', width: '1.375rem', marginLeft: '0.75rem' }} />
            </Flatknapp>
        )
    } else {
        return (
            <Flatknapp className="bruker-knapp" onClick={oppdaterLoggInnState}>
                <span>Logg inn</span>
                <People style={{ height: '1.5rem', width: '1.375rem', marginLeft: '0.75rem' }} />
            </Flatknapp>
        )
    }
}
