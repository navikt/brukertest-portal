import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as ProfilIkon } from '../../style/ressurser/Profil-ikon.svg'
import { useHistory } from 'react-router-dom'

export interface profilProps {
    brukernavn: string
    knappVenstreRoutePath: string
    knappMidtenRoutePath: string
    knappHøyreRoutePath: string
    knappVenstreIkon: React.ReactElement
    knappMidtenIkon: React.ReactElement
    knappHøyreIkon: React.ReactElement
    knappVenstreTittel: string
    knappMidtenTittel: string
    knappHøyreTittel: string
    knappVenstreInnhold: string
    knappMidtenInnhold: string
    knappHøyreInnhold: string
}

export default function Profil(props: profilProps): React.ReactElement {
    const history = useHistory()

    // Hvert hovedomrade blir wrappet inni buttons for å sikre universelt design

    return (
        <div className="profil">
            <div>
                <ProfilIkon className="profil-ikon" />
                <Systemtittel className="brukernavn">{props.brukernavn}</Systemtittel>
            </div>
            <div className="meny-items">
                <button
                    className="meny-item"
                    onClick={() => history.push(props.knappVenstreRoutePath)}
                >
                    <Hovedomrade
                        tittel={props.knappVenstreTittel}
                        toppIkon={props.knappVenstreIkon}
                        hovedInnhold={<p className="typo-normal">{props.knappVenstreInnhold}</p>}
                    />
                </button>
                <button
                    className="meny-item"
                    onClick={() => history.push(props.knappMidtenRoutePath)}
                >
                    <Hovedomrade
                        tittel={props.knappMidtenTittel}
                        toppIkon={props.knappMidtenIkon}
                        hovedInnhold={<p className="typo-normal">{props.knappMidtenInnhold}</p>}
                    />
                </button>
                <button
                    className="meny-item"
                    onClick={() => history.push(props.knappHøyreRoutePath)}
                >
                    <Hovedomrade
                        tittel={props.knappHøyreTittel}
                        toppIkon={props.knappHøyreIkon}
                        hovedInnhold={<p className="typo-normal">{props.knappHøyreInnhold}</p>}
                    />
                </button>
            </div>
        </div>
    )
}
