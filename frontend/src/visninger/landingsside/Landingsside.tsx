import { HandsHeart } from '@navikt/ds-icons'
import { Knapp } from 'nav-frontend-knapper'
import { Element, Normaltekst } from 'nav-frontend-typografi'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Hovedomrade from '../../komponenter/hovedomrade/Hovedomrade'
import { ReactComponent as InfoIllustrasjon } from '../../style/ressurser/LandingssideInfoIllustrasjon.svg'

export default function SamtykkeskjemaLandingsside(): React.ReactElement {
    const history = useHistory()

    const Innhold = () => (
        <>
            <InfoIllustrasjon />
            <Element className="topptekst">
                I innbyggerpanelet får du en oversikt over intervju, brukertester og
                spørreundersøkelser om NAV sine tjenester du kan melde din interesse i å delta på.{' '}
            </Element>
            <Normaltekst>
                Du kan bli med på brukertester. Gjennom brukertesting kan du være en av de første
                til å teste våre nye tjenester og gi oss tilbakemelding. Hva er bra? Hva må bli
                bedre?
            </Normaltekst>
            {/* <Normaltekst>
                Eller kanskje du heller vil vær med på intervju? I intervju vil vi høre om dine
                erfaringer rundt ulike temaer knyttet til NAV. Uansett om du har erfaringer med NAV
                eller ikke, fortell oss om det slik at vi kan bli bedre på å hjelpe deg.
            </Normaltekst>
            <Normaltekst>
                Du kan også svare på spørreundersøkelser. Vi trenger å vite fra deg hvordan
                tjenestene våre kan bli enklere og bedre å bruke. Derfor spør vi deg slik at du
                slipper å spørre oss senere!
            </Normaltekst> */}
            <Knapp
                style={{ marginBottom: '2rem' }}
                onClick={() => history.push('/samtykkeskjema/landingsside')}
            >
                Gå til samtykkeskjema
            </Knapp>
        </>
    )

    return (
        <div className="landingsside">
            <Hovedomrade
                tittel={'Bli med på utviklingen av NAV sine tjenester'}
                toppIkon={<HandsHeart />}
                hovedInnhold={<Innhold />}
            />
        </div>
    )
}
