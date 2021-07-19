import React from 'react'
import { People } from '@navikt/ds-icons'
import '../../style/less/containers/loginButtonTopBar.less'
import { Flatknapp } from 'nav-frontend-knapper'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function LoginButtonTopBar(): React.ReactElement {
    return (
        <Router>
            <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
                <Flatknapp className="loginBtn1">
                    <span>Ola Nordmann</span>
                    <People className="personIkon" />
                </Flatknapp>
            </Link>
        </Router>
    )
}
