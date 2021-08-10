import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ToppBar from '../komponenter/navigasjon/ToppBar'
import AdminProfilside from './admin/AdminProfilside'
import MineSamtykkeskjemaer from './admin/MineSamtykkeskjemaer'
import OpprettelseFullført from './admin/OpprettelseFullført'

import OpprettSamtykkeskjema from './admin/OpprettSamtykkeskjema'
import DeltakerProfilside from './deltaker/DeltakerProfilside'
import Landingsside from './landingsside/Landingsside'

import LagSamtykkeskjemaVisning from './lagSamtykkeskjema/LagSamtykkeskjemaVisning'

import Samtykkeskjema from './samtykkeskjema/Samtykkeskjema'
import SamtykkeskjemaLandingsside from './samtykkeskjema/SamtykkeskjemaLandingsside'

export default function Routes(): React.ReactElement {
    return (
        <Router>
            <ToppBar />
            <Switch>
                <Route path="/" exact>
                    <Landingsside />
                </Route>
                <Route path="/profil" exact>
                    <DeltakerProfilside />
                </Route>
                <Route path="/samtykkeskjema/landingsside" exact>
                    <SamtykkeskjemaLandingsside />
                </Route>
                <Route path="/samtykkeskjema" exact>
                    <Samtykkeskjema />
                </Route>
                <Route path="/admin/lag-samtykkeskjema-visning" exact>
                    <LagSamtykkeskjemaVisning />
                </Route>
                <Route path="/admin/profil" exact>
                    <AdminProfilside />
                </Route>
                <Route path="/admin/opprett-samtykkeskjema" exact>
                    <OpprettSamtykkeskjema />
                </Route>
                <Route path="/admin/skjema-opprettet" exact>
                    <OpprettelseFullført />
                </Route>
                <Route path="/admin/mine-samtykkeskjemaer" exact>
                    <MineSamtykkeskjemaer />
                </Route>
            </Switch>
        </Router>
    )
}
