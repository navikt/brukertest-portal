import React, { useContext } from 'react'
import { Hovedknapp } from 'nav-frontend-knapper'
import { useHistory } from 'react-router-dom'
import { AuthLevel, useAppStateDispatcher } from '../../kjerne/state/AppStateContext'
import { StegContext } from '../../kjerne/state/StegContext'

export default function LoggInnHovedknapp(): React.ReactElement {
    const [, settSteg] = useContext(StegContext)
    const history = useHistory()

    const appDispatcher = useAppStateDispatcher()

    const oppdaterLoggInnState = () => {
        appDispatcher.settLoggInnState(AuthLevel.administrator)

        history.push('/samtykkeskjema')

        //Setter steg tilbake til 0 for reset ved logg ut->inn
        settSteg(0)
    }

    return <Hovedknapp onClick={oppdaterLoggInnState}>Logg inn</Hovedknapp>
}
