import { useState } from 'react'
import { ResultsPageStyles } from './ResultsPage.styles'
import Rps from '../Rps'
function ResultsPage(props) {
  return (
    <ResultsPageStyles>
      <div className='your-pick'>
        <h2>YOU PICKED</h2>
        <Rps choice={props.choice}/>
      </div>
      <div className='results'>
        <h2>{props.result}</h2>
        <button onClick={() => props.setDisplayResults(false)}>PLAY AGAIN</button>
      </div>
      <div className='house-pick'>
        <h2>THE HOUSE PICKED</h2>
        <Rps choice={props.computerChoice}/>
      </div>
    </ResultsPageStyles>
  );
}

export default ResultsPage;
