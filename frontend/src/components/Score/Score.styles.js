import styled, {css} from 'styled-components'

export const ScoreStyles = styled.div((props) => css`

  display: flex;
  flex-direction: row;
  border:2px hsl(217, 16%, 45%) solid;
  padding:15px 20px;
  margin: 30px 20%;
  justify-content: space-between;
  border-radius: 20px;
  height:120px;

  .title {
    display: flex;
    flex-direction: column;
    color:white;
    font-size: 25px;
    align-self: center;
    line-height: 21px;
  }

  .score-container {
    display: flex;
    flex-direction: column;
    background-color:white;
    border-radius:20px;
    padding:15px 40px;
  }

  .score-title {
    color:hsl(229, 64%, 46%);
    align-self:center;
    margin:0;
    font-weight:600px;
    letter-spacing: 2px;
  }

  .score {
    font-size: 70px;
    align-self:center;
    color: hsl(229, 25%, 31%);
    margin: 0;
    line-height:60px
  }
`)
