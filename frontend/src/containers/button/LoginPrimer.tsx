import React from 'react'
import '../../style/less/containers/loginPrimer.less'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../core/state/AppStateContext'

export default function LoginPrimer(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    const updateLogin = () => {
        appDispatcher.setLoginState(AuthLevel.administrator)
    }

    return (
        <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
            <Hovedknapp className="hovedknapp" onClick={updateLogin}>
                Logg inn
            </Hovedknapp>
        </Link>
    )
}
