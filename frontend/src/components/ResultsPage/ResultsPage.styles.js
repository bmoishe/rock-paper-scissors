import styled, {css} from 'styled-components'

export const ResultsPageStyles = styled.div(() => css`
  display: flex;
  color: white;
  align-items:center;
  justify-content:center;
  .house-pick {
    align-self: center;
    margin-left: 100px;
  }
  .your-pick {
    align-self: center;
    margin-right: 100px;
  }

  .results {
    display:flex;
    flex-direction: column;
  }
  .results button {
    font-family: 'Barlow Semi Condensed', sans-serif;
    cursor: pointer;
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    /* border: 1px solid white; */
    background-color: white;
    text-shadow: 0px 0px 0px transparent;
    border-radius: 7px;
    color:red;
    font-size:16px;
    padding:7px 35px;
    font-weight:600px;
    letter-spacing: 2px;
  }
  .results h2{
    align-self: center;
    font-size:38px;
    margin:10px 0;
  }
`)
