import { Flatknapp, Knapp } from 'nav-frontend-knapper'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function SamtykkeskjemaLandingsside(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()

    const oppdaterLoggInnState = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)
    }

    return (
        <div className="landingsside">
            <Systemtittel className="overskrift">
                {'Bli med på utviklingen av NAV sine tjenester'}
            </Systemtittel>
            <Link
                to="/samtykkeskjema/landingsside"
                style={{ marginBottom: '2rem', textDecoration: 'none' }}
            >
                <Knapp>Gå til samtykkeskjema</Knapp>
            </Link>
            <Link to="/admin" onClick={oppdaterLoggInnState} style={{ textDecoration: 'none' }}>
                <Flatknapp onClick={oppdaterLoggInnState}>Logg inn som administrator</Flatknapp>
            </Link>
        </div>
    )
}
