import styled, {css} from 'styled-components'

export const ChoicesPageStyles = styled.div(() => css`
display:flex;
flex-direction: column;
  .pentagon {
    align-self:center;
  }
  .pentagon > img {
    z-index:-1;
position: relative;
    top:-350px;
    left: 20px;
    z-index:-1;
  }
  .choices-first-layer {
    display:flex;
    justify-content:center;
  }
  .choices-second-layer {
    display:flex;
    justify-content:space-around;
    margin-top:30px;
    margin-bottom:95px;
  }
  
  .choices-third-layer {
    display:flex;
    justify-content:space-around;
  }
  .paper {
    margin-left:100px;
  }
  /* .rock {
    margin-left:100px;
  }
  .paper { 
    margin-right:100px;
  } */
  .spock { 
    /* spock */
    margin-right:100px;
  }
`)
