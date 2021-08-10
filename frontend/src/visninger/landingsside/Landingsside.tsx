import { Flatknapp, Knapp } from 'nav-frontend-knapper'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'

export default function SamtykkeskjemaLandingsside(): React.ReactElement {
    const appDispatcher = useAppStateDispatcher()
    const history = useHistory()

    const oppdaterLoggInnState = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)
        history.push('/admin/profil')
    }

    return (
        <div className="landingsside">
            <Systemtittel className="overskrift">
                {'Bli med på utviklingen av NAV sine tjenester'}
            </Systemtittel>
            <Knapp
                style={{ marginBottom: '2rem' }}
                onClick={() => history.push('/samtykkeskjema/landingsside')}
            >
                Gå til samtykkeskjema
            </Knapp>

            <Flatknapp onClick={oppdaterLoggInnState}>Logg inn som administrator</Flatknapp>
        </div>
    )
}
