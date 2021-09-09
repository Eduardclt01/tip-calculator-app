import React from 'react';
import { AppContext } from "./AppContext.js";
import Card from './components/Card.js'
import CardInputSection from './components/CardInputSection.js'
import CardDisplaySection from './components/CardDisplaySection.js'

import './css/App.css'

function App() {
  const appContext = React.useContext(AppContext);

  return (
    <div className="App">
    <pre>{JSON.stringify(appContext.state, null, 2)}</pre>

      <Card>
        <CardInputSection></CardInputSection>
        <CardDisplaySection calculatedTotalAmount={appContext.state.calculatedTotalAmount}
                            calculatedTipAmount={appContext.state.calculatedTipAmount}>
        </CardDisplaySection>
      </Card>

    </div>
  );
}

export default App;
