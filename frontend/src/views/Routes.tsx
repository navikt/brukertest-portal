import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landingsside from './landingsside/Landingsside'
import Samtykkeskjema from './samtykkeskjema/Samtykkeskjema_00'

export default function Routes(): React.ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landingsside} />
                <Route
                    path="/samtykkeskjema"
                    exact
                    component={Samtykkeskjema}
                />
            </Switch>
        </Router>
    )
}
