import React from 'react'
import { People } from '@navikt/ds-icons'
import { Flatknapp } from 'nav-frontend-knapper'
import { useHistory } from 'react-router-dom'

export default function BrukerKnappToppBar(): React.ReactElement {
    const history = useHistory()

    return (
        <Flatknapp className="bruker-knapp" onClick={() => history.push('/profil')}>
            <span>Ola Nordmann</span>
            <People style={{ height: '1.5rem', width: '1.375rem', marginLeft: '0.75rem' }} />
        </Flatknapp>
    )
}
