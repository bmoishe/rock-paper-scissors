import { AppStyles } from './App.styles'
import Score from './components/Score'
import ChoicesPage from './components/ChoicesPage'
import ResultsPage from './components/ResultsPage'
import RulesModal from './components/RulesModal'
import { useState, Fragment } from 'react'

function App() {
  const [ displayRules, setDisplayRules ] = useState(false)
  function handleClick() {
    setDisplayRules(true)
  }
  return (
    <Fragment>
      <AppStyles/>
      {/* Rules Page */}
      {displayRules &&
        <RulesModal setDisplayRules={setDisplayRules}/>
      }
      {/* Score */}
      <Score/>
      {/* Choices */}
      <ChoicesPage/>
      {/* Results Page */}
      <ResultsPage/>
      {/* Rules CTA */}
      <button onClick={() => handleClick()}>Rules</button>
    </Fragment>
  );
}

export default App;
