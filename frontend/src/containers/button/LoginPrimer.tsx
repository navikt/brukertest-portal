import React from 'react'
import '../../style/less/containers/loginPrimer.less'
import { Hovedknapp } from 'nav-frontend-knapper'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function LoginPrimer(): React.ReactElement {
    return (
        <Router>
            <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
                <Hovedknapp className="hovedknapp">Logg inn</Hovedknapp>
            </Link>
        </Router>
    )
}
