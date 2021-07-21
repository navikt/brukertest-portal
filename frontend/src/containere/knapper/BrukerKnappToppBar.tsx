import React from 'react'
import { People } from '@navikt/ds-icons'
import { Flatknapp } from 'nav-frontend-knapper'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function BrukerKnappToppBar(): React.ReactElement {
    return (
        <Router>
            <Link to="/samtykkeskjema" style={{ textDecoration: 'none' }}>
                <Flatknapp className="brukerKnapp">
                    <span>Ola Nordmann</span>
                    <People />
                </Flatknapp>
            </Link>
        </Router>
    )
}
