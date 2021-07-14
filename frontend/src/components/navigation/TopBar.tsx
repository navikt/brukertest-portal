import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../../style/less/components/navigation/topBar.less'
import LoginButtonTopBar from '../../containers/button/LoginButtonTopBar'
import LogoutButtonTopBar from '../../containers/button/LogoutButtonTopBar'

export default function TopBar(): React.ReactElement {
    return (
        <div className="topBar">
            <LogoutButtonTopBar />
            <Sidetittel className="sidetittel">{'Innbyggerpanelet'}</Sidetittel>
            <LoginButtonTopBar />
        </div>
    )
}
