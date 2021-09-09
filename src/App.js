import './css/App.css'
import Card from './components/Card.js'
import CardInputSection from './components/CardInputSection.js'
import CardDisplaySection from './components/CardDisplaySection.js'


function App() {
  return (
    <div className="App">
      <Card>
        <CardInputSection></CardInputSection>
        <CardDisplaySection></CardDisplaySection>
      </Card>
    </div>
  );
}

export default App;
