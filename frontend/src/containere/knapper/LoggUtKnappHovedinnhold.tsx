import { Flatknapp } from 'nav-frontend-knapper'
import React from 'react'
import { useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggUtKnappHovedinnhold(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    function oppdaterLoggInnState() {
        appDispatcher.settLoggUtState()
    }
    return <Flatknapp onClick={oppdaterLoggInnState}>Logg ut</Flatknapp>
}
