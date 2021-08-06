import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as ProfilIkon } from '../../style/ressurser/Profil-ikon.svg'
import { useHistory } from 'react-router-dom'

export interface profilProps {
    brukernavn: string
    linkVenstreRoutePath: string
    linkMidtenRoutePath: string
    linkHøyreRoutePath: string
    linkVenstreIkon: React.ReactElement
    linkMidtenIkon: React.ReactElement
    linkHøyreIkon: React.ReactElement
    linkVenstreTittel: string
    linkMidtenTittel: string
    linkHøyreTittel: string
    linkVenstreInnhold: string
    linkMidtenInnhold: string
    linkHøyreInnhold: string
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
                    onClick={() => history.push(props.linkVenstreRoutePath)}
                >
                    <Hovedomrade
                        tittel={props.linkVenstreTittel}
                        toppIkon={props.linkVenstreIkon}
                        hovedInnhold={<p className="typo-normal">{props.linkVenstreInnhold}</p>}
                    />
                </button>
                <button
                    className="meny-item"
                    onClick={() => history.push(props.linkMidtenRoutePath)}
                >
                    <Hovedomrade
                        tittel={props.linkMidtenTittel}
                        toppIkon={props.linkMidtenIkon}
                        hovedInnhold={<p className="typo-normal">{props.linkMidtenInnhold}</p>}
                    />
                </button>
                <button
                    className="meny-item"
                    onClick={() => history.push(props.linkHøyreRoutePath)}
                >
                    <Hovedomrade
                        tittel={props.linkHøyreTittel}
                        toppIkon={props.linkHøyreIkon}
                        hovedInnhold={<p className="typo-normal">{props.linkHøyreInnhold}</p>}
                    />
                </button>
            </div>
        </div>
    )
}
