import { RpsStyles } from './Rps.styles'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import spock from '../../images/icon-spock.svg'
import lizard from '../../images/icon-lizard.svg'
function Rps(props) {
  function renderRPS() {
    console.log(props.choice)
    if(props.choice === 'rock') {
      return<RpsStyles alt={'rock'} src={rock} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'/>
    }
    if(props.choice === 'paper') {
      return <RpsStyles alt={'paper'} src={paper} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'/>
    }
    if(props.choice === 'scissors') {
      return <RpsStyles alt={'scissors'} src={scissors} colorStart='hsl(349, 71%, 52%)' colorEnd='hsl(349, 70%, 56%)'/>
    }
    if(props.choice === 'spock') {
      return  <RpsStyles alt={'spock'} src={spock} colorStart='hsl(261, 73%, 60%)' colorEnd='hsl(261, 72%, 63%)'/>
    }
    if(props.choice === 'lizard') {
      return <RpsStyles alt={'lizard'} src={lizard} colorStart='hsl(189, 59%, 53%)' colorEnd='hsl(189, 58%, 57%)'/>
    } else return
  }

  return (
    <div>
    {renderRPS()}
    </div>
  );
}

export default Rps;
