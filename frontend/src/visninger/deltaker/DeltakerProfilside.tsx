import { Caseworker, FileContent, Search } from '@navikt/ds-icons'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as ProfilIkon } from '../../style/ressurser/Profil-ikon.svg'
import { useHistory } from 'react-router-dom'

export default function DeltakerProfilside(): React.ReactElement {
    const history = useHistory()

    // Hvert hovedomrade blir wrappet inni buttons for å sikre universelt design

    return (
        <div className="deltaker-profilside">
            <div>
                <ProfilIkon className="profil-ikon" />
                <Systemtittel className="brukernavn">Ola Nordmann</Systemtittel>
            </div>
            <div className="meny-items">
                <button
                    className="meny-item"
                    onClick={() => history.push('/admin/mine-samtykkeskjemaer')}
                >
                    <Hovedomrade
                        tittel={'Mine samtykker'}
                        toppIkon={<FileContent />}
                        hovedInnhold={
                            <p className="typo-normal">
                                Her kan du se, redigere eller slette de samtykkeskjemaene du har
                                singert.
                            </p>
                        }
                    />
                </button>
                <button
                    className="meny-item"
                    onClick={() => history.push('/admin/opprett-samtykkeskjema')}
                >
                    <Hovedomrade
                        tittel={'Hva kan jeg bli med på?'}
                        toppIkon={<Search />}
                        hovedInnhold={
                            <p className="typo-normal">
                                En oversikt over framtidige brukertester, intervjuer og
                                spørreundersøkelser du kan melde din interesse til.
                            </p>
                        }
                    />
                </button>
                <button className="meny-item">
                    <Hovedomrade
                        tittel={'Mine kontaktopplysninger'}
                        toppIkon={<Caseworker />}
                        hovedInnhold={
                            <p className="typo-normal">
                                Her kan du se hvilken informasjon du har registrert.
                            </p>
                        }
                    />
                </button>
            </div>
        </div>
    )
}
