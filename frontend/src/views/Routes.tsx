import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopBar from '../components/navigation/TopBar'

import Landingsside from './landingsside/Landingsside'
import Samtykkeskjema from './samtykkeskjema/Samtykkeskjema'

export default function Routes(): React.ReactElement {
    return (
        <Router>
            <TopBar />
            <Switch>
                <Route path="/" exact>
                    <Landingsside />
                </Route>
                <Route path="/samtykkeskjema" exact>
                    <Samtykkeskjema />
                </Route>
            </Switch>
        </Router>
    )
}

// Kan det være at den ikke rendrer de individuelle sidene? Må jeg kanskje linke dem til / og /samtykkeskjema?
