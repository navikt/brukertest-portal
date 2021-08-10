import React from 'react'
import { Flatknapp } from 'nav-frontend-knapper'
import { useHistory } from 'react-router-dom'
import { useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggUtKnappToppBar(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()
    const history = useHistory()

    function oppdaterLoggInnState() {
        appDispatcher.settLoggUtState()
        history.push('/')
    }

    return (
        <Flatknapp className="logg-ut-knapp-topp" onClick={oppdaterLoggInnState}>
            Logg ut
        </Flatknapp>
    )
}
