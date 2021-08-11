import React, { useContext, useState } from 'react'
import { StegContext } from '../../kjerne/state/StegContext'
import DeltakerUtfyllingSteg from '../../komponenter/samtykkeskjema/DeltakerUtfyllingSteg'
import ForsåttSjekkSteg from '../../komponenter/samtykkeskjema/ForståttSjekkSteg'
import InformasjonsSteg from '../../komponenter/samtykkeskjema/InformasjonsSteg'
import LoggUtKnappHovedinnhold from '../../containere/knapper/LoggUtKnappHovedinnhold'
import { Tilbakeknapp, Nesteknapp } from 'nav-frontend-ikonknapper'
import { Hovedknapp } from 'nav-frontend-knapper'
import { HandsHeart, Success } from '@navikt/ds-icons'

export function SamtykkeskjemaSteg(): React.ReactElement {
    const [steg, settSteg] = useContext(StegContext)

    const [skjemaUtfylt, settSkjemaUtfylt] = useState(false)
    const [nesteTrykket, settNesteTrykket] = useState(false)

    const hoppTilNesteSteg = () => {
        settSteg(steg + 1)
        settNesteTrykket(false)
    }

    const hoppTilForrigeSteg = () => {
        settSteg(steg - 1)
    }

    function skjemaValideringFørNesteHopp() {
        if (skjemaUtfylt) {
            hoppTilNesteSteg()
        } else {
            settNesteTrykket(true)
        }
    }

    switch (steg) {
        case 0:
            return (
                <>
                    <InformasjonsSteg
                        førsteTittel={'Invitasjon til deltakelse'}
                        førsteAvsnitt={
                            'Du inviteres til å delta i en undersøkelse om tjenester og praksis vedrørende arbeidsledighet. Du er valgt ut fordi du er arbeidssøkende og vil derfor kunne bidra med nyttig informasjon for forbedrelsen av våre tjenester.'
                        }
                        andreTittel={'Hva skal undersøkelsen brukes til?'}
                        andreAvsnitt={
                            'Undersøkelsen skal brukes til å forbedre NAVs digitale tjenester. Den gjennomføres Onsdag 11. August kl. 14:00  og varer til kl. 15:00 samme dag'
                        }
                        tredjeAvsnitt={
                            'Undersøkelsen vil bli publisert i en rapport. Rapporten skal deles med ansatte i NAV og med våre samarbeidspartnere.'
                        }
                    />
                    <div className="hovedomraade-bunn">
                        <div></div>
                        <Nesteknapp onClick={hoppTilNesteSteg} />
                    </div>
                </>
            )
        case 1:
            return (
                <>
                    <InformasjonsSteg
                        førsteTittel={'Hvem er ansvarlig for undersøkelsen?'}
                        førsteAvsnitt={
                            'Vi er ansatt i Designseksjonen i NAV IT i Arbeids- og velferdsdirektoratet (NAV). I designesksjonen arbeider vi med å forbedre NAVs tjenester. Ansvarlig for undersøkelsen er designer Håkon Larsen.'
                        }
                        andreTittel={'Innsamling av opplysninger'}
                        andreAvsnitt={
                            'I denne undersøkelsen gjør vi intervjuer. Vi ønsker også å ta opp intervjuet med lydopptaker, for lettere å kunne skrive ned det du sier. '
                        }
                        tredjeAvsnitt={
                            'Vi vil stille spørsmål angående din foreløpige livssituasjon. Du velger selv om du vil fortelle om sensitive opplysninger som helseforhold eller hvor du jobber. Opplysningene vi samler inn skal kun brukes til det undersøkelsen handler om, og det du samtykker til.'
                        }
                    />
                    <div className="hovedomraade-bunn">
                        <Tilbakeknapp onClick={hoppTilForrigeSteg} />
                        <Nesteknapp onClick={hoppTilNesteSteg} />
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <InformasjonsSteg
                        førsteTittel={'Behandling av opplysninger'}
                        førsteAvsnitt={
                            'Opplysningene du oppgir lagres i NAVs systemer. Kun 3 ansatte som jobber med undersøkelsen har tilgang til opplysningene du oppgir. Denne informasjonen vil anonymiseres slik at den kan formidles videre.'
                        }
                        andreAvsnitt={
                            'Vi sletter alle opplysninger som kan lede tilbake til deg senest 12 måneder etter intervjuet.'
                        }
                        tredjeAvsnitt={
                            'Alle som skal ha tilgang til personopplysningene har taushetsplikt til å holde opplysningene hemmelig.'
                        }
                    />
                    <div className="hovedomraade-bunn">
                        <Tilbakeknapp onClick={hoppTilForrigeSteg} />
                        <Nesteknapp onClick={hoppTilNesteSteg} />
                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <InformasjonsSteg
                        førsteTittel={'Dine rettigheter'}
                        førsteAvsnitt={
                            'Det er frivillig å delta. Du kan når som helst avslutte intervjuet, uten å måtte oppgi en grunn. Du kan når som helst se, redigere eller slette dine opplysninger gjennom din profil på Innbygerpanelet. Der kan du også redigere eller trekke tilbake samtykket.'
                        }
                        andreAvsnitt={
                            'Mottar du tjenester fra NAV, vil ikke deltakelse i denne undersøkelsen påvirke dine rettigheter i NAV. Vi har ikke tilgang til dine saker. Andre i NAV får heller ikke vite hvem som deltar i undersøkelsen, og opplysningene du gir kan ikke kobles til dine saker.'
                        }
                        tredjeTittel={'Kontaktperson'}
                        tredjeAvsnitt={
                            'Har du spørsmål om undersøkelsen kan du kontakte testansvarlig, Håkon Larsen, på telefon 987654321 og e-post: håkon@nav.no'
                        }
                    />
                    <div className="hovedomraade-bunn">
                        <Tilbakeknapp onClick={hoppTilForrigeSteg} />
                        <Nesteknapp onClick={hoppTilNesteSteg} />
                    </div>
                </>
            )
        case 4:
            return (
                <>
                    <ForsåttSjekkSteg
                        skjemaUtfylt={skjemaUtfylt}
                        settSkjemaUtfylt={settSkjemaUtfylt}
                        erNesteTrykket={nesteTrykket}
                    />
                    <div className="hovedomraade-bunn">
                        <Tilbakeknapp onClick={hoppTilForrigeSteg} />
                        <Nesteknapp onClick={skjemaValideringFørNesteHopp} />
                    </div>
                </>
            )

        case 5:
            return (
                <>
                    <DeltakerUtfyllingSteg
                        settSkjemaUtfylt={settSkjemaUtfylt}
                        erNesteTrykket={nesteTrykket}
                    />
                    <div className="hovedomraade-bunn">
                        <Tilbakeknapp onClick={hoppTilForrigeSteg} />
                        <Hovedknapp onClick={skjemaValideringFørNesteHopp}>
                            Jeg samtykker
                        </Hovedknapp>
                    </div>
                </>
            )
        case 6:
            return (
                <>
                    <InformasjonsSteg
                        førsteTittel={'Vil du se skjemaet på nytt?'}
                        førsteAvsnitt={
                            'Gå inn på din profil ved å klikke på navnet ditt øverst i høyre hjørne. Da vil du få en oversikt over de skjemaene du har gitt ditt samtykke til. '
                        }
                        andreTittel={'Vil du endre eller trekke ditt samtykke?'}
                        andreAvsnitt={
                            'Gå inn på din profil og gå så inn på "mine samtykker". Herifra vil du ha muligheten til å endre eller trekke ditt samtykke.'
                        }
                        tredjeTittel={'Vil du delta på flere intervju eller brukertester?'}
                        tredjeAvsnitt={'Gå inn på www.nav.no/innbyggerpanelet.'}
                    />
                    <div className="hovedomraade-bunn">
                        <div></div>
                        <LoggUtKnappHovedinnhold />
                    </div>
                </>
            )

        default:
            return <h3>Denne skulle visst ikke dukke opp, men det gjorde den :/</h3>
    }
}

export function HovedområdeTittel(): string {
    const [steg] = useContext(StegContext)
    if (steg > 5) {
        return 'Ditt samtykke er registrert'
    } else {
        return 'Samtykke til intervju'
    }
}

export function HovedområdeIkon(): React.ReactElement {
    const [steg] = useContext(StegContext)
    if (steg > 5) {
        return <Success />
    } else {
        return <HandsHeart />
    }
}
