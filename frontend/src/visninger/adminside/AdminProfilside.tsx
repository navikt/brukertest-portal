import { AddCircle, Calender, FileContent } from '@navikt/ds-icons'
import { Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as ProfilIkon } from '../../style/ressurser/Profil-ikon.svg'
import { LenkepanelBase } from 'nav-frontend-lenkepanel'

export default function AdminProfilside(): React.ReactElement {
    // Hvert hovedomrade blir wrappet inni et lenkepanel-komponent for å sikre universelt design

    return (
        <div className="admin-profilside">
            <div>
                <ProfilIkon className="profil-ikon" />
                <Systemtittel className="brukernavn">Admin Istrator</Systemtittel>
            </div>
            <div className="meny-items">
                <LenkepanelBase href="#" border>
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
                </LenkepanelBase>
                <LenkepanelBase href="#" border>
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
                </LenkepanelBase>
                <LenkepanelBase href="#" border>
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
                </LenkepanelBase>
            </div>
        </div>
    )
}
