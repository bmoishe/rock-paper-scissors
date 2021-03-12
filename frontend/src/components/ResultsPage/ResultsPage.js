import { ResultsPageStyles } from './ResultsPage.styles'
import Rps from '../Rps'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import spock from '../../images/icon-spock.svg'
import lizard from '../../images/icon-lizard.svg'
function ResultsPage() {

  return (
    <ResultsPageStyles>
      ResultsPage

            {/* - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
*/}
      <h2>YOU PICKED</h2>
        <Rps choice={rock} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
      <h2>THE HOUSE PICKED</h2>
        <Rps choice={paper} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
    </ResultsPageStyles>
  );
}

export default ResultsPage;
