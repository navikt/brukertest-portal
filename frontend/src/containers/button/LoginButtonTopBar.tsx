import React, { useState } from 'react'
import { People } from '@navikt/ds-icons'
import '../../style/less/containers/loginButtonTopBar.less'
import { Flatknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'

export default function LoginButtonTopBar(): React.ReactElement {
    return (
        <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
            <Flatknapp className="loginBtn1">
                <span>Logg inn</span>
                <People className="personIkon" />
            </Flatknapp>
        </Link>
    )
}
