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
  h1 {
    display: flex;
    flex-direction: column;
    color:white;
    font-size: 25px;
    align-self: center;
    line-height: 21px;
  }
`)

export const ScoreCardStyles = styled.div((props) => css`
  display: flex;
  flex-direction: column;
  background-color:white;
  height:120px;
  width:160px;
  align-self: center;
  border-radius:20px;
  .score-container {
    align-self: center;
  }
  h2 {
    color:hsl(229, 64%, 46%);
    align-self:center;
  }
  .score {
    font-size: 50px;
    align-self:center;
  }
`)
