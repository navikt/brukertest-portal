import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ToppBar from '../komponenter/navigasjon/ToppBar'
import OpprettelseFullført from './adminside/OpprettelseFullført'

import OpprettSamtykkeskjema from './adminside/OpprettSamtykkeskjema'
import Landingsside from './landingsside/Landingsside'
import Samtykkeskjema from './samtykkeskjema/Samtykkeskjema'

export default function Routes(): React.ReactElement {
    return (
        <Router>
            <ToppBar />
            <Switch>
                <Route path="/" exact>
                    <Landingsside />
                </Route>
                <Route path="/samtykkeskjema" exact>
                    <Samtykkeskjema />
                </Route>
                <Route path="/admin/opprett-samtykkeskjema" exact>
                    <OpprettSamtykkeskjema />
                </Route>
                <Route path="/admin/skjema-opprettet" exact>
                    <OpprettelseFullført />
                </Route>
            </Switch>
        </Router>
    )
}
