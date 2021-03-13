import { ScoreStyles } from './Score.styles'

function Score(props) {
  return (
    <ScoreStyles>
      <h1 className='title'><span>ROCK</span> <span>PAPER</span> <span>SCISSORS</span><span>LIZZARD</span> <span>SPOCK</span></h1>
        <div className='score-container'>
          <h2 className='score-title'>SCORE</h2>
          <h2 className='score'>{props.score}</h2>
        </div>
    </ScoreStyles>
  );
}

export default Score;
