import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ToppBar from '../komponenter/navigasjon/ToppBar'

import Landingsside from './landingsside/Landingsside'
import LagSamtykkeskjemaVisning from './lagSamtykkeskjema/LagSamtykkeskjemaVisning'

export default function Routes(): React.ReactElement {
    return (
        <Router>
            <ToppBar />
            <Switch>
                <Route path="/" exact>
                    <Landingsside />
                </Route>
                <Route path="/samtykkeskjema" exact>
                    <LagSamtykkeskjemaVisning />
                </Route>
            </Switch>
        </Router>
    )
}
