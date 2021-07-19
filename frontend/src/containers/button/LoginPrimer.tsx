import React, { useContext } from 'react'
import '../../style/less/containers/loginPrimer.less'
import { Hovedknapp } from 'nav-frontend-knapper'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { AppStateContext } from '../../core/state/AppStateContext'

export default function LoginPrimer(): React.ReactElement {
    const [, setHarLoggetInn] = useContext(AppStateContext)

    function updateLogin() {
        setHarLoggetInn(true)
    }

    return (
        <Router>
            <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
                <Hovedknapp className="hovedknapp" onClick={updateLogin}>
                    Logg inn
                </Hovedknapp>
            </Link>
        </Router>
    )
}
