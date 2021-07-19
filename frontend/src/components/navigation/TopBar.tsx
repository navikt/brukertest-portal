import React, { useContext } from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../../style/less/components/navigation/topBar.less'
import LoginButtonTopBar from '../../containers/button/LoginButtonTopBar'
import LogoutButtonTopBar from '../../containers/button/LogoutButtonTopBar'
import { AppStateContext } from '../../core/state/AppStateContext'

export default function TopBar(): React.ReactElement {
    const [harLoggetInn] = useContext(AppStateContext)

    function renderItems() {
        if (harLoggetInn) {
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
