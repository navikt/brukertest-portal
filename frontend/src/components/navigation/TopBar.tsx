import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import LoginButtonTopBar from '../../containers/button/LoginButtonTopBar'
import LogoutButtonTopBar from '../../containers/button/LogoutButtonTopBar'
import { useAppState } from '../../core/state/AppStateContext'

export default function TopBar(): React.ReactElement {
    const { isLoggedIn } = useAppState()

    function renderItems() {
        if (isLoggedIn) {
            return (
                <>
                    <LogoutButtonTopBar />
                    <Sidetittel className="sidetittel">{'Innbyggerpanelet'}</Sidetittel>
                    <LoginButtonTopBar />
                </>
            )
        } else {
            return <Sidetittel className="sidetittel">{'Innbyggerpanelet'}</Sidetittel>
        }
    }

    return <div className="topBar">{renderItems()}</div>
}
