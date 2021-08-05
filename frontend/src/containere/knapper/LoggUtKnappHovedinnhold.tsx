import { Flatknapp } from 'nav-frontend-knapper'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggUtKnappHovedinnhold(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()
    const history = useHistory()

    function oppdaterLoggInnState() {
        appDispatcher.settLoggUtState()
        history.push('/')
    }
    return <Flatknapp onClick={oppdaterLoggInnState}>Logg ut</Flatknapp>
}
