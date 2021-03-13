import { ChoicesPageStyles } from './ChoicesPage.styles'
import Rps from '../Rps'
import pentagon from '../../images/bg-pentagon.svg'

function ChoicesPage(props) {
  const handleClick = async (selection) => {
    props.setChoice(selection)
  }
  return (
    <ChoicesPageStyles>
      <div className='pentagon'>
        <div className='choices-first-layer'>
          <div className='scissors' onClick={() => handleClick('scissors')}>
          <Rps choice={'scissors'} colorStart='hsl(349, 71%, 52%)' colorEnd='hsl(349, 70%, 56%)'/>
          </div>
        </div>
        <div className='choices-second-layer'>
          <div className='paper' onClick={() => handleClick('paper')}>
            <Rps choice={'paper'} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
          </div>
          <div className='rock' onClick={() => handleClick('rock')}>
            <Rps choice={'rock'} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
          </div>
        </div>
        <div className='choices-third-layer'>
          <div className='spock' onClick={() => handleClick('spock')}>
            <Rps choice={'spock'} colorStart='hsl(261, 73%, 60%)' colorEnd='hsl(261, 72%, 63%)'/>
          </div>
          <div className='lizard' onClick={() => handleClick('lizard')}>
            <Rps choice={'lizard'} colorStart='hsl(189, 59%, 53%)' colorEnd='hsl(189, 58%, 57%)'/>
          </div>
        </div>
        <img  src={pentagon} alt='pentagon'></img>
      </div>
    </ChoicesPageStyles>
  );
}

export default ChoicesPage;
