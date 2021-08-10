import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import BrukerKnappToppBar from '../../containere/knapper/BrukerKnappToppBar'
import LoggUtKnappToppBar from '../../containere/knapper/LoggUtKnappToppBar'
import { useAppState } from '../../kjerne/state/AppStateContext'

export default function ToppBar(): React.ReactElement {
    const { erLoggetInn } = useAppState()

    function renderItems() {
        if (erLoggetInn) {
            return (
                <>
                    <LoggUtKnappToppBar />
                    <Sidetittel className="sidetittel">{'Innbyggerpanelet'}</Sidetittel>
                    <BrukerKnappToppBar />
                </>
            )
        } else {
            return (
                <>
                    <div></div>
                    <Sidetittel className="sidetittel">{'Innbyggerpanelet'}</Sidetittel>{' '}
                    <BrukerKnappToppBar />
                </>
            )
        }
    }

    return <div className="topp-bar">{renderItems()}</div>
}
