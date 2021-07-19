import React from 'react'
import Footer from './components/navigation/Footer'
import TopBar from './components/navigation/TopBar'
import './style/less/main.less'
import Routes from './views/Routes'
import { AppStateProvider } from './core/state/AppStateContext'

export default function App(): React.ReactElement {
    return (
        <AppStateProvider>
            <div className="App">
                <TopBar />
                <Routes />
                <Footer />
            </div>
        </AppStateProvider>
    )
}
