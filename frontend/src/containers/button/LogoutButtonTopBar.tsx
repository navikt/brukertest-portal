import React from 'react'
import '../../style/less/containers/logoutButtonTopBar.less'
import { Flatknapp } from 'nav-frontend-knapper'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function LogoutButtonTopBar(): React.ReactElement {
    return (
        <Router>
            <Link to="/">
                <Flatknapp className="logoutBtn1">Logg ut</Flatknapp>
            </Link>
        </Router>
    )
}
