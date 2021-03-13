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
    top:-399px;
    left: 69px;
    z-index:-1;
  }
  .choices-first-layer {
    display:flex;
    justify-content:center;
  }
  .choices-second-layer {
    display:flex;
    justify-content:space-around;
    margin-top:15px;
    margin-bottom:50px;
  }
  
  .choices-third-layer {
    display:flex;
    justify-content:space-around;
  }
  .paper {
    margin-left:100px;
  }
  .spock { 
    margin-right:100px;
  }
`)
