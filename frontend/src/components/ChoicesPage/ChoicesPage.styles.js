import styled, {css} from 'styled-components'

export const ChoicesPageStyles = styled.div(() => css`
display:flex;
flex-direction: column;
  .pentagon {
    z-index:-1;
    /* position: absolute; */
    /* top:-250px; */
    align-self:center;
  }
  .pentagon > img {
position: relative;
    top:-350px;
    left: 20px;
    z-index:-1;
    /* fill: hsl(214, 47%, 23%); */
  }
  .choices-first-layer {
    display:flex;
    justify-content:center;
  }
  .choices-second-layer {
    display:flex;
    justify-content:space-around;
    margin-top:30px;
    margin-bottom:80px;

  }
  
  .choices-third-layer {
    display:flex;
    justify-content:space-around;
  }
  .rock {
    margin-left:100px;
  }
  .paper {
    margin-right:100px;
  }
`)
