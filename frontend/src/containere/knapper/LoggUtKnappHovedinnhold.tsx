import { Flatknapp } from 'nav-frontend-knapper'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggUtKnappHovedinnhold(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    function oppdaterLoggInnState() {
        appDispatcher.settLoggUtState()
    }
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Flatknapp onClick={oppdaterLoggInnState}>Logg ut</Flatknapp>
        </Link>
    )
}
