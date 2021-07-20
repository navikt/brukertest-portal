import React from 'react'
import Footer from './components/navigation/Footer'
import './style/less/main.less'
import Routes from './views/Routes'
import { ProvideAppContext } from './core/state/AppStateContext'

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
