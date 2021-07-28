import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import LoginPrimer from '../../containere/knapper/LoggInnHovedknapp'
import { useAppState } from '../../kjerne/state/AppStateContext'
import { HovedomradeProps } from './Hovedomrade'

export default function Hovedinnhold(props: HovedomradeProps): React.ReactElement {
    const { erLoggetInn } = useAppState()

    return erLoggetInn ? (
        <div className="hovedinnhold">{props.hovedInnhold}</div>
    ) : (
        <div className="hovedinnhold">
            <Systemtittel className="logg-inn-info">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
        </div>
    )
}
