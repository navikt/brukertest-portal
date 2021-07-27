import React from 'react'
import { Flatknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'
import { useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggUtKnappToppBar(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    function oppdaterLoggInnState() {
        appDispatcher.settLoggUtState()
    }

    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Flatknapp className="logg-ut-knapp-topp" onClick={oppdaterLoggInnState}>
                Logg ut
            </Flatknapp>
        </Link>
    )
}
