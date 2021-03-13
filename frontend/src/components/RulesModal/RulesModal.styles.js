import styled from 'styled-components'


export const RulesModalBackgroundStyles = styled.div`
  padding: 30%;
  position: absolute;
  z-index: 1;
  background-color:black;
  opacity:0.5;
  height: 100%;
  width: 100%;
  top: -100px;
`

export const RulesModalStyles = styled.div`
  z-index: 2;
  position: absolute;
  top: 100px;
  left: 25%;
  right: 25%;
  display: flex;
  flex-direction: column;
  color:hsl(229, 25%, 31%);
  background-color:white;
  border-radius: 20px;
  padding: 40px 50px 50px;
  header {
    line-height:0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  button {
    font-family: 'Barlow Semi Condensed', sans-serif;
    cursor: pointer;
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 1px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }
`
