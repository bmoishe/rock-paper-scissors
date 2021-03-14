import { ChoicesPageStyles } from './ChoicesPage.styles'
import Rps from '../Rps'
import pentagon from '../../images/bg-pentagon.svg'

function ChoicesPage(props) {
  const handleClick = async (selection) => {
    await generateResult(selection)
    await props.setDisplayResults(true)
  }

async function generateResult(choice) {
  const randomIndex = Math.floor(Math.random() * Math.floor(4))
  const options = ["paper", "rock", "lizard", "spock", "scissors"]
  const computerChoice = options[randomIndex]
  const result = ["Draw", "YOU WIN", "YOU LOSE"]
  let index1 = options.indexOf(choice)
  let index2 = options.indexOf(computerChoice)
  let dif = index2 - index1;
    if(dif < 0) {
        dif += options.length;
    }
    while(dif > 2) {
        dif -= 2;
    }
    await props.setChoice(choice)
    await props.setResult(`${result[dif]}`)
    await props.setComputerChoice(computerChoice)
    await handleScore(dif)
    
  };
  async function handleScore(dif) {
    const points = [0,1,-1]
    const newScore = props.score + points[dif]
    await props.setScore(newScore)
  }

  return (
    <ChoicesPageStyles>
      <div className='pentagon'>
        <div className='choices-first-layer'>
          <div className='scissors' onClick={() => handleClick('scissors')}>
          <Rps selection choice={'scissors'}/>
          </div>
        </div>
        <div className='choices-second-layer'>
          <div className='spock' onClick={() => handleClick('spock')}>
            <Rps selection choice={'spock'} />
          </div>
          <div className='paper' onClick={() => handleClick('paper')}>
            <Rps selection choice={'paper'}/>
          </div>
        </div>
        <div className='choices-third-layer'>
         
          <div className='lizard' onClick={() => handleClick('lizard')}>
            <Rps selection choice={'lizard'} />
          </div>
          <div className='rock' onClick={() => handleClick('rock')}>
            <Rps selection choice={'rock'} />
          </div>
        </div>
        <img  src={pentagon} alt='pentagon'></img>
      </div>
    </ChoicesPageStyles>
  );
}

export default ChoicesPage;
