import React from 'react';
import './App.less';
import Tekstomrade from 'nav-frontend-tekstomrade';

const App = (): JSX.Element => (
  <div className="App">
    <Tekstomrade>
      {'Dette er et tekstområde. \n Dette er en ny linje.'}
    </Tekstomrade>

  </div>
);

export default App;
