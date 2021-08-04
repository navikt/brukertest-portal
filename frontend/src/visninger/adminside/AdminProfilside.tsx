import { AddCircle, Calender, FileContent } from '@navikt/ds-icons'
import { Innholdstittel, Systemtittel } from 'nav-frontend-typografi'
import React from 'react'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as ProfilIkon } from '../../style/ressurser/Profil-ikon.svg'

export default function AdminProfilside(): React.ReactElement {
    return (
        <div className="admin-profilside">
            <div>
                <ProfilIkon className="profil-ikon" />
                <Systemtittel className="brukernavn">Admin Istrator</Systemtittel>
            </div>
            <div className="meny-items">
                <Hovedomrade
                    tittel={'Mine samtykkeskjemaer'}
                    toppIkon={<FileContent />}
                    hovedInnhold={
                        <p className="typo-normal">
                            Her kan du se, redigere eller slette de samtykkeskjemaene du har
                            opprettet. Du finner også lenken du kan dele med brukeren.
                        </p>
                    }
                />
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
            </div>
        </div>
    )
}
