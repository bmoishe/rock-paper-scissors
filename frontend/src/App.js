import { AppStyles, RulesButtonStlyes } from './App.styles'
import Score from './components/Score'
import ChoicesPage from './components/ChoicesPage'
import ResultsPage from './components/ResultsPage'
import RulesModal from './components/RulesModal'
import { useState, Fragment } from 'react'

function App() {
  const [ displayRules, setDisplayRules ] = useState(false)
  const [ displayResults, setDisplayResults ] = useState(false)
  const [ choice, setChoice ] = useState(null)
  const [ computerChoice, setComputerChoice ] = useState(null)
  const [ score, setScore ] = useState(0)
  const [ result, setResult ] = useState('')
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
      <Score score={score}/>
      {/* Choices */}
      {!displayResults &&
        <ChoicesPage setScore={setScore} score={score} setResult={setResult} setDisplayResults={setDisplayResults} setComputerChoice={setComputerChoice} setChoice={setChoice} computerChoice={computerChoice} choice={choice}/>
      }
      {/* Results Page */}
      {
        displayResults && <ResultsPage result={result} computerChoice={computerChoice} setDisplayResults={setDisplayResults} choice={choice}/>
      }
      
      {/* Rules CTA */}
      <RulesButtonStlyes onClick={() => handleClick()}><button>RULES</button></RulesButtonStlyes>
    </Fragment>
  );
}

export default App;
