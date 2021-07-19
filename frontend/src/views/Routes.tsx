import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landingsside from './landingsside/Landingsside'
import Samtykkeskjema from './samtykkeskjema/Samtykkeskjema'

export default function Routes(): React.ReactElement {
    return (
        <Router>
            <Switch>
                <Route>
                    <Landingsside />
                </Route>
                <Route>
                    <Samtykkeskjema />
                </Route>
            </Switch>
        </Router>
    )
}
