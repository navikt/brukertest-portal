import React from 'react'
import Footer from './components/navigation/Footer'
import TopBar from './components/navigation/TopBar'
import './style/less/main.less'
import Routes from './views/Routes'

const App = (): JSX.Element => (
    <div className="App">
        <TopBar />
        <Routes />
        <Footer />
    </div>
)

export default App
