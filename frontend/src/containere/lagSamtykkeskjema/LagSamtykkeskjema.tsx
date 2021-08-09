import Hjelpetekst from 'nav-frontend-hjelpetekst'
import { Hovedknapp, Knapp } from 'nav-frontend-knapper'
import { Textarea } from 'nav-frontend-skjema'
import React, { ReactElement, useState } from 'react'
import AnsvaligPersonerInputs, { IAnsvarligPerson } from '../../komponenter/lagSamtykkeskjema/AnsvarligPersonerInputs'
import JaNeiValg from '../../komponenter/lagSamtykkeskjema/JaNeiValg'
import KontaktPersonerInputs, { IKontaktPerson } from '../../komponenter/lagSamtykkeskjema/KontaktPersonerInputs'
import LagCheckboxerMedLabels from '../../komponenter/lagSamtykkeskjema/LagCheckboxerMedLabels'
import LagringsTidSelect from '../../komponenter/lagSamtykkeskjema/LagringsTidSelect'
import TittelMedHjelpetekst from '../../komponenter/lagSamtykkeskjema/TittelMedHjelpetekst'
import VelgStartSluttDato from '../../komponenter/lagSamtykkeskjema/VelgStartSluttDato'

export interface ISamtykkeskjema {
    undersøkelseOm: string
    valgFordi: string
    skalBrukesTil: string
    spørreOm: string
    startDato: string
    sluttDato: string
    skalPubliseres: boolean
    gjøresLydopptak: boolean
    lagringstid: number
    jegForstårPunkter: Array<string>
    sierJaPunkter: Array<string>
    ansvarligePersoner: Array<IAnsvarligPerson>
    kontaktPersoner: Array<IKontaktPerson>
}

export default function LagSamtykkeskjema(): ReactElement {
    const [undersøkelseOm, settUndersøkelseOm] = useState<string>('')
    const [valgtFordi, settValgtFordi] = useState<string>('')
    const [skalBrukesTil, settSkalBrukesTil] = useState<string>('')
    const [spørreOm, settSpørreOm] = useState<string>('')

    const [startDato, settStartDato] = useState<string>('')
    const [sluttDato, settSluttDato] = useState<string>('')
    
    const [skalPubliseres, settSkalPubliseres] = useState<boolean>(false)
    const [gjøresLydopptak, settGjøresLydopptak] = useState<boolean>(false)

    const [lagringsTid, settLagringsTid] = useState<number>(12)

    const [jegForstårPunkter, settJegForstårPunkter] = useState<Array<string>>([])
    const [sierJaPunkter, settSierJaPunkter] = useState<Array<string>>([])
    
    const [ansvarligePersoner, settAnsvarligePersoner] = useState<Array<IAnsvarligPerson>>([{
        fornavn: '',
        etternavn: '',
        team: '',
        produktområde: '',
        seksjon: ''
    }])
    const [kontaktPersoner, settKontaktPersoner] = useState<Array<IKontaktPerson>>([{
        fornavn: '',
        etternavn: '',
        team: '',
        produktområde: '',
        seksjon: '',
        telefon: '',
        epost: ''
    }])

    const lagSamtykkeskjema = () => {
        const samtykkeskjema: ISamtykkeskjema = {
            undersøkelseOm: undersøkelseOm,
            valgFordi: valgtFordi,
            skalBrukesTil: skalBrukesTil,
            spørreOm: spørreOm,
            startDato: startDato,
            sluttDato: sluttDato,
            skalPubliseres: skalPubliseres,
            gjøresLydopptak: gjøresLydopptak,
            lagringstid: lagringsTid,
            jegForstårPunkter: jegForstårPunkter,
            sierJaPunkter: sierJaPunkter,
            ansvarligePersoner: ansvarligePersoner,
            kontaktPersoner: kontaktPersoner
        }
        console.log(samtykkeskjema)
    }

    return (
        <div className="lag-samtykkeskjema">
            <TittelMedHjelpetekst 
                tittel="Invitasjon til deltagelse"
                hjelpetekst="Pass på å ikke avsløre deltakerens tilknyttning til NAV eller sensitive personopplysninger"
            />
            <Textarea
                label="Du inviteres til å delta i en undersøkelse om" 
                maxLength={2000}
                value={undersøkelseOm}
                onChange={e => {settUndersøkelseOm(e.target.value)}}
            />
            <Textarea 
                label="Du er valgt ut fordi" 
                maxLength={2000}
                value={valgtFordi}
                onChange={e => {settValgtFordi(e.target.value)}}
            />
            <TittelMedHjelpetekst 
                tittel="Hva skal undersøkelsen brukes til?"
                hjelpetekst="Datoen må være på format: DD.MM.ÅÅÅÅ"
            />
            <Textarea 
                label="Undersøkelsen skal brukes til" 
                maxLength={2000}
                value={skalBrukesTil}
                onChange={e => {settSkalBrukesTil(e.target.value)}}
            />
            <VelgStartSluttDato 
                startDato={startDato}
                settStartDato={settStartDato}
                sluttDato={sluttDato}
                settSluttDato={settSluttDato}
            />
            <JaNeiValg 
                valgTittel="Skal undersøkelsen publiseres?" 
                jaNeiStateDispatch={settSkalPubliseres}
            />
            <p>
                Undersøkelsen vil bli publisert i en rapport. Rapporten skal deles med 
                ansatte i NAV og med våre sammargeidspartnere utenfor NAV.
            </p>
            <h4>Hver er vi og hvem er ansvarlig for undersøkelsen?</h4>
            <p className="ansvarlig-person-input-tekst">
                Vi er ansatt i Designseksjonen i NAV IT i Arbieds- og velferdsdirektoratet
                (NAV). I designseskjonen arbeider vi med å forbedre NAVs tjenester.
                Ansvarlig for undersøkelsen er
            </p>
            <AnsvaligPersonerInputs 
                ansvarligePersoner={ansvarligePersoner}
                ansvarligePersonerDispatch={settAnsvarligePersoner}
            />
            <p className="kontakt-person-input-tekst">Har du spørsmål om undersøkelsen kan du kontakte</p>
            <KontaktPersonerInputs 
                kontaktPersoner={kontaktPersoner}
                kontaktPersonerDispatch={settKontaktPersoner}
            />
            <h3>Hvilke metoder bruker vi?</h3>
            <JaNeiValg 
                valgTittel="Skal det gjøres lydopptak?"
                jaNeiStateDispatch={settGjøresLydopptak}
            />
            <p>
                I denne undersøkelsen gjør vi intervjuer.
                Vi ønsker også å ta opp intervjuet med lydopptaker, for lettere å kunne
                skrive ned det du sier.
            </p>
            <TittelMedHjelpetekst 
                tittel="Hvilke opplysninger samler vi inn?"
                hjelpetekst="Pass på å ikke avslører for my av undersøkelsen slik at du skaper bias"
            />
            <Textarea 
                label="Vi vil spørre deg om" 
                maxLength={2000}
                value={spørreOm}
                onChange={e => {settSpørreOm(e.target.value)}}
            />
            <p>
                Du velger selv om du vil fortelle om sensitive opplysninger som helseforhold
                eller hvor du jobber. Opplysningene vi samler inn skal kun brukes til det
                undersøkelsen handler om, og det du har samtykket til.
            </p>
            <TittelMedHjelpetekst 
                tittel="Oppbevaring av personopplysningene"
                hjelpetekst="Sett eventuelt kortere frist, om det er mulig."
            />
            <span>
                Alle opplysningene om deg lagres i NAVs systemer. Det er bare ansatte som jobber
                med undersøkelsen som har tilgang. Vi sletter all personlig data om deg så snart
                vi ikke har bruk for det, senest 
                <LagringsTidSelect 
                    lagringsTid={lagringsTid}
                    lagringsTidDispatch={settLagringsTid}
                /> 
            </span>
            <span>måneder etter intervjuet.</span>
            {/* TODO Legge til slik at man kan redigere denne seksjonen */}
            <div className="tittel-med-hjelpetekst">
                <h3>Taushetsplikt</h3>
                <Hjelpetekst className="taushetsplikt-hjelpetekst-popover">
                    <p className="taushetsplikt-hjelpetekst">
                        Om det er en leverandør som behandler personopplysninger på vegne av 
                        NAV(databehandler) må du opplyse dette.
                    </p>
                    <p className="taushetsplikt-hjelpetekst">
                        Det samme gjelder om opplysningene skal utlever til forskningsintutisjoner
                        utenfor NAV. Gi i så fall navn på person eller virksomhet.
                    </p>
                    <p className="taushetsplikt-hjelpetekst">
                        Hvis personopplysningene som samles skal overføres til
                        forskningsintutisjoner utenfor EU/EØS må det i tilleg informeres om
                        risiko og tiltak forbundet med dette.
                    </p>
                </Hjelpetekst>
            </div>
            <p>
                Alle som skal ha tilgang til personopplysningene har taushetsplikt, dvs.
                plikt til å holde opplysningene hemmelig. I denne undersøkelsen er det tre
                personer som skal ha tilgang til opplysningene.
            </p>
            <h3>Anonymisering og formidling av opplysningene</h3>
            <p>
                Før opplysningene slettes så anynomiseres de slik at de kan formidles
                videre til andre. Opplysningene anonymiseres ved at alle inervjuer får en
                kode som viser kjønn og alder, mens alle opplysninger som kan lede tilbake
                til deg fjernes.
            </p>
            <h3>Dine rettigheter</h3>
            <p>
                Det er frivilig å delta. Du kan når som helt avslutte intervjuet, uten å
                måtte oppgi en grunn. Ønsker du å trekke samtykket ditt, så sørger vi for at
                alt materiale om deg slettes. Du har også rett til å se, rette eller slette
                dine opplysninger både under og etter at intervjuet er ferdig. Kontak:
                {/* TODO Legge inn kontaktperson info som blir fylt ut over*/}
                på epost så hjelper vi deg.
            </p>
            <p>
                Mottar du tjenester fra NAV, vil ikke deltakelse i denne undersøkelsen
                påvirke dine rettigheter i NAV. Vi har ikke tilgang i dine saker. Andre i NAV
                får heller ikke vite hvem som deltar i undersøkelsen, og opplysningene du
                gir kan ikke kobles til dine saker.
            </p>
            <h3>Jeg forstår:</h3>
            <LagCheckboxerMedLabels 
                labelsListe={jegForstårPunkter}
                labelsListeDispatch={settJegForstårPunkter}
                inputLabel="Jeg forstår checkbokser"
            />
            <h3>Hva sier jeg ja til?</h3>
            <LagCheckboxerMedLabels 
                labelsListe={sierJaPunkter}
                labelsListeDispatch={settSierJaPunkter}
                inputLabel="Hva sier jeg ja til checkbokser"
            />
            <div className="hovedomraade-bunn">
                <Knapp>Avbryt</Knapp>
                <Hovedknapp onClick={lagSamtykkeskjema}>Lagre</Hovedknapp>
            </div>
        </div>
    )
}