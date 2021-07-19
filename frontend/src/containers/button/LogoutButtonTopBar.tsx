import React, { useContext } from 'react'
import '../../style/less/containers/logoutButtonTopBar.less'
import { Flatknapp } from 'nav-frontend-knapper'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { AppStateContext } from '../../core/state/AppStateContext'

export default function LogoutButtonTopBar(): React.ReactElement {
    const [, setHarLoggetInn] = useContext(AppStateContext)

    function updateLogin() {
        setHarLoggetInn(false)
    }

    return (
        <Router>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Flatknapp className="logoutBtn1" onClick={updateLogin}>
                    Logg ut
                </Flatknapp>
            </Link>
        </Router>
    )
}
