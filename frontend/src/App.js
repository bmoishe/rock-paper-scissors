import { AppStyles } from './App.styles'
import Score from './components/Score'
import ChoicesPage from './components/ChoicesPage'
import ResultsPage from './components/ResultsPage'
import Rules from './components/Rules'

function App() {

  return (
    <AppStyles>
      {/* Score */}
    <Score/>
      {/* Choices */}
      <ChoicesPage/>
      {/* Results Page */}
      <ResultsPage/>
      {/* Rules CTA */}
      <Rules/>
    </AppStyles>
  );
}

export default App;
