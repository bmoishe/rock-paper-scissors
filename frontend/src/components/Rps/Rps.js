import { RpsStyles } from './Rps.styles'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import spock from '../../images/icon-spock.svg'
import lizard from '../../images/icon-lizard.svg'
function Rps(props) {
  function renderRPS() {
    if(props.choice === 'scissors') {
      return <RpsStyles selection={props.selection} colorStart='hsl(39, 89%, 49%)' colorEnd='hsl(40, 84%, 53%)'> <img className='rps' alt={'scissors'} src={scissors} /></RpsStyles>
    }
    if(props.choice === 'spock') {
      return  <RpsStyles selection={props.selection} colorStart='hsl(189, 59%, 53%)' colorEnd='hsl(189, 58%, 57%)'><img className='rps' alt={'spock'} src={spock} /></RpsStyles>
    }
    if(props.choice === 'paper') {
      return <RpsStyles selection={props.selection} colorStart='hsl(230, 89%, 62%)' colorEnd='hsl(230, 89%, 65%)'><img className='rps' alt={'paper'} src={paper} /></RpsStyles>
    }
    if(props.choice === 'lizard') {
      return <RpsStyles selection={props.selection} colorStart='hsl(261, 73%, 60%)' colorEnd='hsl(261, 72%, 63%)'> <img className='rps' alt={'lizard'} src={lizard} /></RpsStyles>
    } 
    if(props.choice === 'rock') {
      return<RpsStyles selection={props.selection} colorStart='hsl(349, 71%, 52%)' colorEnd='hsl(349, 70%, 56%)'> <img className='rps' alt={'rock'} src={rock}/></RpsStyles>
    } else return
  }

  return (
    <div>
    {renderRPS()}
    </div>
  );
}

export default Rps;
