import React from 'react'
import './style/less/main.less'
//import Landingsside from './views/landingsside/Landingsside'
import DeltakerUtfyllingSteg from './components/samtykkeskjema/DeltakerUtfyllingSteg'

const App = (): JSX.Element => (
    <div className="App">
        <DeltakerUtfyllingSteg />
    </div>
)

export default App
