import { AddCircle, Calender, FileContent } from '@navikt/ds-icons'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as ProfilIkon } from '../../style/ressurser/Profil-ikon.svg'
import { useHistory } from 'react-router-dom'

export default function AdminProfilside(): React.ReactElement {
    const history = useHistory()

    // Hvert hovedomrade blir wrappet inni buttons for å sikre universelt design

    return (
        <div className="admin-profilside">
            <div>
                <ProfilIkon className="profil-ikon" />
                <Systemtittel className="brukernavn">Admin Istrator</Systemtittel>
            </div>
            <div className="meny-items">
                <button
                    className="meny-item"
                    onClick={() => history.push('/admin/mine-samtykkeskjemaer')}
                >
                    <Hovedomrade
                        tittel={'Mine samtykkeskjemaer'}
                        toppIkon={<FileContent />}
                        hovedInnhold={
                            <p className="typo-normal">
                                Her kan du se, redigere eller slette dine opprettede
                                samtykkeskjemaer. Du finner også lenken du kan dele med brukeren.
                            </p>
                        }
                    />
                </button>
                <button
                    className="meny-item"
                    onClick={() => history.push('/admin/opprett-samtykkeskjema')}
                >
                    <Hovedomrade
                        tittel={'Opprett samtykkeskjema'}
                        toppIkon={<AddCircle />}
                        hovedInnhold={
                            <p className="typo-normal">
                                Her kan du opprette samtykkeskjema til brukertester, intervjuer og
                                spørreundersøkelser som du kan dele med brukeren.
                            </p>
                        }
                    />
                </button>
                <button className="meny-item">
                    <Hovedomrade
                        tittel={'Aktiviteter'}
                        toppIkon={<Calender />}
                        hovedInnhold={
                            <p className="typo-normal">
                                Her kan du legge ut intervju, brukertester og spørreundersøkelser en
                                bruker kan melde sin interesse i å delta på.
                            </p>
                        }
                    />
                </button>
            </div>
        </div>
    )
}
