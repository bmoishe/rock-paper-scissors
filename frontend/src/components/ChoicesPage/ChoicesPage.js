import { ChoicesPageStyles } from './ChoicesPage.styles'
import Rps from '../Rps'
import logo from '../../logo.svg'
function ChoicesPage() {

  return (
    <ChoicesPageStyles>

      {/* - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
*/}
      <Rps choice={logo} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
      <Rps choice={logo} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
      <Rps choice={logo} colorStart='hsl(349, 71%, 52%)' colorEnd='hsl(349, 70%, 56%)'/>
      <Rps choice={logo} colorStart='hsl(261, 73%, 60%)' colorEnd='hsl(261, 72%, 63%)'/>
      <Rps choice={logo} colorStart='hsl(189, 59%, 53%)' colorEnd='hsl(189, 58%, 57%)'/>
    </ChoicesPageStyles>
  );
}

export default ChoicesPage;
