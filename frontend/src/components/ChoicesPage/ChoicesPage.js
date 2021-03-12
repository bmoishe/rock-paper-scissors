import { ChoicesPageStyles } from './ChoicesPage.styles'
import Rps from '../Rps'
import logo from '../../logo.svg'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import spock from '../../images/icon-spock.svg'
import lizard from '../../images/icon-lizard.svg'
import pentagon from '../../images/bg-pentagon.svg'

function ChoicesPage() {

  return (
    <ChoicesPageStyles>
      Choices Page
      {/* - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
*/}
<img src={pentagon} alt='pentagon'/>
      <Rps choice={rock} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
      <Rps choice={paper} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
      <Rps choice={scissors} colorStart='hsl(349, 71%, 52%)' colorEnd='hsl(349, 70%, 56%)'/>
      <Rps choice={spock} colorStart='hsl(261, 73%, 60%)' colorEnd='hsl(261, 72%, 63%)'/>
      <Rps choice={lizard} colorStart='hsl(189, 59%, 53%)' colorEnd='hsl(189, 58%, 57%)'/>
    </ChoicesPageStyles>
  );
}

export default ChoicesPage;
