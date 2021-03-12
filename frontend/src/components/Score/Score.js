import { ScoreStyles, ScoreCardStyles } from './Score.styles'

function Score() {
const score = 12
  return (
    <ScoreStyles>
      <h1 className='title'><span>ROCK</span> <span>PAPER</span> <span>SCISSORS</span><span>LIZZARD</span> <span>SPOCK</span></h1>
      <ScoreCardStyles><div className='score-container'><h2>SCORE</h2> <div className='score'>{score}</div></div></ScoreCardStyles>
    </ScoreStyles>
  );
}

export default Score;
