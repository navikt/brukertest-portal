import { AddPeople } from '@navikt/ds-icons'
import { Datepicker } from 'nav-datovelger'
import Hjelpetekst from 'nav-frontend-hjelpetekst'
import { Knapp } from 'nav-frontend-knapper'
import { Radio, TextareaControlled } from 'nav-frontend-skjema'
import React, { ReactElement, useState } from 'react'
import AnsvarligPersonInput from '../../komponenter/lagSamtykkeskjema/AnsvarligPersonInput'
import KontaktPersonInput from '../../komponenter/lagSamtykkeskjema/KontaktPersonInput'
import LagringsTidSelect from '../../komponenter/lagSamtykkeskjema/LagringsTidSelect'

export default function LagSamtykkeskjema(): ReactElement {
    const [startDato, settStartDato] = useState<string>('')
    const [sluttDato, settSluttDato] = useState<string>('')
    const [ansvarligPersonerListe, settAnsarligPersonerListe] = useState<ReactElement[]>([<AnsvarligPersonInput key={0}/>])
    const [kontaktPersonerListe, settKontaktPersonerListe] = useState<ReactElement[]>([<KontaktPersonInput key={0}/>])

    const leggTilNyAnsvarligPerson = () => {
        settAnsarligPersonerListe(ansvarligPersonerListe.concat(<AnsvarligPersonInput key={ansvarligPersonerListe.length}/>))
    }

    const leggTilNyKontaktPerson = () => {
        settKontaktPersonerListe(kontaktPersonerListe.concat(<KontaktPersonInput key={kontaktPersonerListe.length} />))
    }

    return (
        <div className="lag-samtykkeskjema">
            <div className="sub-overskrift">
                <h3>Invitasjon til deltagelse</h3>
                <Hjelpetekst>Pass på å ikke avsløre deltakerens tilknyttning til NAV eller sensitive personopplysninger</Hjelpetekst>
            </div>
            <TextareaControlled 
                label="Du inviteres til å delta i en undersøkelse om" 
                maxLength={2000}
                defaultValue=""
            />
            <TextareaControlled 
                label="Du er valgt ut fordi" 
                maxLength={2000}
                defaultValue=""
            />
            <div className="sub-overskrift">
                <h3>Hva skal undersøkelsen brukes til?</h3>
                <Hjelpetekst>Datoen må være på format: DD.MM.ÅÅÅÅ</Hjelpetekst>
            </div>
            <TextareaControlled 
                label="Undersøkelsen skal brukes til" 
                maxLength={2000}
                defaultValue=""
            />
            <div className="dato-container">
                <div className="sub-dato-container">
                    <p>Den gjennomføres</p>
                    <Datepicker 
                        locale={'nb'}
                        value={startDato}
                        onChange={settStartDato}/>
                </div>
                <div className="sub-dato-container">
                    <p>og varer til</p>
                    <Datepicker
                        locale={'nb'}
                        value={sluttDato}
                        onChange={settSluttDato}/>
                </div>
            </div>
            <div className="skal-publiseres-container">
                <h4>Skal undersøkelsen publiseres?</h4>
                <Radio label={'Ja'} name="skal-publiseres"/>
                <Radio label={'Nei'} name="skal-publiseres"/>
            </div>
            <p className="skal-publiseres-info">
                Undersøkelsen vil bli publisert i en rapport. Rapporten skal deles med 
                ansatte i NAV og med våre sammargeidspartnere utenfor NAV.
            </p>
            <h4>Hver er vi og hvem er ansvarlig for undersøkelsen?</h4>
            <p className="ansvarlig-person-input-tekst">
                Vi er ansatt i Designseksjonen i NAV IT i Arbieds- og velferdsdirektoratet
                (NAV). I designseskjonen arbeider vi med å forbedre NAVs tjenester.
                Ansvarlig for undersøkelsen er
            </p>
            {ansvarligPersonerListe}
            <Knapp className="legg-til-person-knapp" onClick={leggTilNyAnsvarligPerson}>
                <AddPeople className="legg-til-person-ikon"/>
                Legg til person
            </Knapp>
            <p className="kontakt-person-input-tekst">Har du spørsmål om undersøkelsen kan du kontakte</p>
            {kontaktPersonerListe}
            <Knapp className="legg-til-person-knapp" onClick={leggTilNyKontaktPerson}>
                <AddPeople className="legg-til-person-ikon"/>
                Legg til person
            </Knapp>
            <h3>Hvilke metoder bruker vi?</h3>
            <div className="skal-lydopptak-container">
                <h4>Skal det gjøres lydopptak?</h4>
                <Radio label={'Ja'} name="skal-lydopptak"/>
                <Radio label={'Nei'} name="skal-lydopptak"/>
            </div>
            <span>I denne undersøkelsen gjør vi intervjuer. </span>
            <span className="skal-lydopptak-info">
                Vi ønsker også å ta opp intervjuet med lydopptaker, for lettere å kunne
                skrive ned det du sier.
            </span>
            <div className="sub-overskrift">
                <h3>Hvilke opplysninger samler vi inn?</h3>
                <Hjelpetekst>
                    Pass på å ikke avslører for my av undersøkelsen slik at du skaper bias
                </Hjelpetekst>
            </div>
            <TextareaControlled 
                label="Vi vil spørre deg om" 
                maxLength={2000}
                defaultValue=""
            />
            <p>
                Du velger selv om du vil fortelle om sensitive opplysninger som helseforhold
                eller hvor du jobber. Opplysningene vi samler inn skal kun brukes til det
                undersøkelsen handler om, og det du har samtykket til.
            </p>
            <div className="sub-overskrift">
                <h3>Oppbevaring av personopplysningene</h3>
                <Hjelpetekst>
                    Sett eventuelt kortere frist, om det er mulig.
                </Hjelpetekst>
            </div>
            <span>
                Alle opplysningene om deg lagres i NAVs systemer. Det er bare ansatte som jobber
                med undersøkelsen som har tilgang. Vi sletter all personlig data om deg så snart
                vi ikke har bruk for det, senest 
                <LagringsTidSelect /> 
            </span>
            <span>måneder etter intervjuet.</span>
            {/* TODO Legge til slik at man kan redigere denne seksjonen */}
            <div className="sub-overskrift">
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
        </div>
    )
}