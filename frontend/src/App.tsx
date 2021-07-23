import React from 'react'
import Footer from './komponenter/navigasjon/Footer'
import './style/less/main.less'
import Routes from './visninger/Routes'
import { ProvideAppContext } from './kjerne/state/AppStateContext'

export default function App(): React.ReactElement {
    return (
        <ProvideAppContext>
            <div className="App">
                <Routes />
                <Footer />
            </div>
        </ProvideAppContext>
    )
}
