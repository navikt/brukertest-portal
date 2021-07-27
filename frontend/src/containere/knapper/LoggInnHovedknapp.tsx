import React, { useContext } from 'react'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Link } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'
import { StegContext } from '../../kjerne/state/StegContext'

export default function LoggInnHovedknapp(): React.ReactElement {
    const [, settSteg] = useContext(StegContext)

    const appDispatcher = useAppStateDispatcher()

    const oppdaterLoggInnState = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)
        //Setter steg tilbake til 0 for å kunne logge ut og inn for å resette steg
        settSteg(0)
    }

    return (
        <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
            <Hovedknapp onClick={oppdaterLoggInnState}>Logg inn</Hovedknapp>
        </Link>
    )
}
