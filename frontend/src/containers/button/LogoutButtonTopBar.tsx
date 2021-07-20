import React from 'react'
import '../../style/less/containers/logoutButtonTopBar.less'
import { Flatknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'
import { useAppStateDispatcher } from '../../core/state/AppStateContext'

export default function LogoutButtonTopBar(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()
    function updateLogin() {
        appDispatcher.setLogoutState()
    }

    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Flatknapp className="logoutBtn1" onClick={updateLogin}>
                Logg ut
            </Flatknapp>
        </Link>
    )
}
