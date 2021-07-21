import React from 'react'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggInnHovedknapp(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    const oppdaterLoggInnState = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)
    }

    return (
        <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
            <Hovedknapp onClick={oppdaterLoggInnState}>Logg inn</Hovedknapp>
        </Link>
    )
}
