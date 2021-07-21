import React from 'react'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function LoggInnHovedknapp(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    const updateLogin = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)
    }

    return (
        <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
            <Hovedknapp className="hovedknapp" onClick={updateLogin}>
                Logg inn
            </Hovedknapp>
        </Link>
    )
}
