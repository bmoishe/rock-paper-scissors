import { useState } from 'react'
import { ResultsPageStyles } from './ResultsPage.styles'
import Rps from '../Rps'
function ResultsPage(props) {
  console.log(`
  props.result: ${props.result}
  `)
  return (
    <ResultsPageStyles>
      <div className='your-pick'>
        <h2>YOU PICKED</h2>
        <Rps choice={props.choice} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
      </div>
      <div className='results'>
        <h2>{props.result}</h2>
        <button onClick={() => props.setDisplayResults(false)}>PLAY AGAIN</button>
      </div>
      <div className='house-pick'>
        <h2>THE HOUSE PICKED</h2>
        <Rps choice={props.computerChoice} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
      </div>
    </ResultsPageStyles>
  );
}

export default ResultsPage;
