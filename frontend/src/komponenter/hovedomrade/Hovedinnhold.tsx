import React from 'react'
import { Systemtittel } from 'nav-frontend-typografi'
import LoginPrimer from '../../containere/knapper/LoggInnHovedknapp'
import { useAppState } from '../../kjerne/state/AppStateContext'
import { useContext } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'
import InformasjonsSteg from '../samtykkeskjema/InformasjonsSteg'
import JegForstårSteg from '../samtykkeskjema/ForståttSjekkSteg'
import DeltakerUtfyllingSteg from '../samtykkeskjema/DeltakerUtfyllingSteg'

export default function Hovedinnhold(): React.ReactElement {
    const { erLoggetInn } = useAppState()
    const [steg] = useContext(StegContext)

    function SamtykkeskjemaSteg() {
        switch (steg) {
            case 0:
                return (
                    <InformasjonsSteg
                        førsteTittel={'Invitasjon til deltakelse'}
                        førsteAvsnitt={
                            'Du inviteres til å delta i en undersøkelse om... Du er valgt ut fordi...'
                        }
                        andreTittel={'Hva skal undersøkelsen brukes til?'}
                        andreAvsnitt={
                            'Undersøkelsen skal brukes til... Den gjennomføres... og varer til...'
                        }
                        tredjeAvsnitt={
                            'Undersøkelsen vil bli publisert i en rapport. Rapporten skal deles med ansatte i NAV og med våre samarbeidspartnere utenfor NAV.'
                        }
                    />
                )
            case 1:
                return (
                    <InformasjonsSteg
                        førsteTittel={'Hvem er vi og hvem er ansvarlig for undersøkelsen?'}
                        førsteAvsnitt={
                            'Vi er ansatt i Designseksjonen i NAV IT i Arbeids- og velferdsdirektoratet (NAV). I designesksjonen arbeider vi med å forbedre NAVs tjenester. Ansvarlig for undersøkelsen er... Har du spørsmål om undersøkelsen kan du kontakte... på telefon XX XX XX XX og e-post: XX@nav.no'
                        }
                        andreTittel={'Hvilke metoder bruker vi?'}
                        andreAvsnitt={
                            'I denne undersøkelsen gjør vi intervjuer. Vi ønsker også å ta opp intervjuet med lydopptaker, for lettere å kunne skrive ned det du sier.'
                        }
                    />
                )
            case 2:
                return (
                    <InformasjonsSteg
                        førsteTittel={'Hvilke personopplysninger samler vi inn?'}
                        førsteAvsnitt={
                            'Vi vil spørre deg om... Du velger selv om du vil fortelle om sensitive opplysninger som helseforhold eller hvor du jobber. Opplysningene vi samler inn skal kun brukes til det undersøkelsen handler om, og det du samtykker til.'
                        }
                        andreTittel={'Oppbevaring av personopplysningene'}
                        andreAvsnitt={
                            'Alle opplysningene om deg lagres i NAVs systemer. Det er bare ansatte som jobber med undersøkelsen som har tilgang. Vi sletter all personlig data om deg så snart vi ikke har bruk for det, senest 12 måneder etter intervjuet.'
                        }
                    />
                )
            case 3:
                return (
                    <InformasjonsSteg
                        førsteTittel={'Taushetsplikt'}
                        førsteAvsnitt={
                            'Alle som skal ha tilgang til personopplysningene har taushetsplikt, dvs. plikt til å holde opplysningene hemmelig. I denne undersøkelsen er det tre personer som skal ha tilgang til opplysningene. '
                        }
                        andreTittel={'Anonymisering og formidling av opplysningene'}
                        andreAvsnitt={
                            'Før opplysningene slettes så anonymiseres de slik at de kan formidles videre til andre. Opplysningene anonymiseres ved at alle intervjuer får en kode som viser kjønn og alder, mens alle opplysninger som kan lede tilbake til deg fjernes.'
                        }
                    />
                )
            case 4:
                return (
                    <InformasjonsSteg
                        førsteTittel={'Dine rettigheter'}
                        førsteAvsnitt={
                            'Det er frivillig å delta. Du kan når som helst avslutte intervjuet, uten å måtte oppgi en grunn. Ønsker du å trekke samtykket ditt, så sørger vi for at alt materiale om deg slettes. Du har også rett til å se, rette eller slette dine opplysninger både under og etter at intervjuet er ferdig. Kontakt... på e-post, så hjelper vi deg.'
                        }
                        andreAvsnitt={
                            'Mottar du tjenester fra NAV, vil ikke deltakelse i denne undersøkelsen påvirke dine rettigheter i NAV. Vi har ikke tilgang til dine saker. Andre i NAV får heller ikke vite hvem som deltar i undersøkelsen, og opplysningene du gir kan ikke kobles til dine saker.'
                        }
                    />
                )
            case 5:
                return <JegForstårSteg />

            case 6:
                return <DeltakerUtfyllingSteg />
            case 7:
                return (
                    <InformasjonsSteg
                        førsteTittel={'Vil du se skjemaet på nytt?'}
                        førsteAvsnitt={
                            'Gå inn på din profil ved å klikke på navnet ditt øverst i høyre hjørne. Da vil du få en oversikt over de skjemaene du har gitt ditt samtykke til. '
                        }
                        andreTittel={'Vil du endre eller trekke ditt samtykke?'}
                        andreAvsnitt={'Gå inn på din profil og....'}
                        tredjeTittel={'Vil du delta på flere intervju eller brukertester?'}
                        tredjeAvsnitt={'Gå inn på www.nav.no/innbyggerpanelet.'}
                    />
                )

            default:
                return <h3>Denne skulle visst ikke dukke opp, men det gjorde den :/</h3>
        }
    }

    return erLoggetInn ? (
        <div className="hovedinnhold">{SamtykkeskjemaSteg()}</div>
    ) : (
        <div className="hovedinnhold">
            <Systemtittel className="loggInnInfo">
                {'Logg inn for å registrere ditt samtykke'}
            </Systemtittel>
            <LoginPrimer />
        </div>
    )
}
