import React from 'react'
import InformasjonsSteg from './components/samtykkeskjema/InformasjonsSteg'
import './style/less/main.less'

const App = (): JSX.Element => (
    <div className="App">
        <InformasjonsSteg 
            innformasjonsInnhold={
                {
                    førsteTittel: 'Invitasjon til deltakelse',
                    andreTittel: 'Hva skal undersøkelsen brukes til?',
                    førsteAvsnitt: 'Du inviteres til å delta i en undersøkelse om... Du er valgt ut fordi...',
                    andreAvsnitt: 'Undersøkelsen skal brukes til... Den gjennomføres YYYY-MM-DD TT:MM og varer til YYYY-MM-DD TT:MM',
                    ekstraAvsnitt: 'Undersøkelsen vil bli publisert i en rapport. Rapporten skal deles med ansatte i NAv og med våre samarbeidspartnere utenfor NAV.'
                }
            }
        />
    </div>
)

export default App
