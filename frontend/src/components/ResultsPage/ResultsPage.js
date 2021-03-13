import { ResultsPageStyles } from './ResultsPage.styles'
import Rps from '../Rps'
function ResultsPage(props) {
const result = 'YOU WIN'
const computerResult = 'paper'
  return (
    <ResultsPageStyles>
      <div className='your-pick'>
        <h2>YOU PICKED</h2>
        <Rps choice={props.choice} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
      </div>
      <div className='results'>
        <h2>{result}</h2>
        <button>PLAY AGAIN</button>
      </div>
      <div className='house-pick'>
        <h2>THE HOUSE PICKED</h2>
        <Rps choice={computerResult} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
      </div>
    </ResultsPageStyles>
  );
}

export default ResultsPage;
