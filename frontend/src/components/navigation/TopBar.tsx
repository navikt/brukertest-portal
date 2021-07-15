import React, { useState } from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../../style/less/components/navigation/topBar.less'
import LoginButtonTopBar from '../../containers/button/LoginButtonTopBar'
import LogoutButtonTopBar from '../../containers/button/LogoutButtonTopBar'

export default function TopBar(): React.ReactElement {
    const [loggedIn, setloggedIn] = useState<boolean>(true)

    function renderItems() {
        if (loggedIn) {
            return (
                <>
                    <LogoutButtonTopBar />
                    <Sidetittel className="sidetittel">
                        {'Innbyggerpanelet'}
                    </Sidetittel>
                    <LoginButtonTopBar />
                </>
            )
        } else {
            return (
                <Sidetittel className="sidetittel">
                    {'Innbyggerpanelet'}
                </Sidetittel>
            )
        }
    }

    return <div className="topBar">{renderItems()}</div>
}
