import React from 'react'
import { People } from '@navikt/ds-icons'
import '../../style/less/containers/LoginButtonTopBar.less'
import { Flatknapp } from 'nav-frontend-knapper'

export default function LoginButtonTopBar(): React.ReactElement {
    return (
        <div className="loginBtnTopBar">
            <Flatknapp className="loginBtn1">
                <span>Logg inn</span>
                <People className="personIkon" />
            </Flatknapp>
        </div>
    )
}
