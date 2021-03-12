import styled from 'styled-components'


export const RulesModalBackgroundStyles = styled.div`
  padding: 30%;
  position: absolute;
  z-index: 1;
  background-color:black;
  opacity:0.5;
  height: 100%;
  width: 100%;
`

export const RulesModalStyles = styled.div`
  z-index: 2;
  position: absolute;
  top: 25%;
  bottom: 25%;
  right: 25%;
  left:25%;
  display: flex;
  flex-direction: column;
  color:hsl(229, 25%, 31%);
  background-color:white;
  border-radius: 20px;
  height: 600px;
`
// ### Primary

// - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
// - Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
// - Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
// - Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
// - Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)

// ### Neutral

// - Dark Text: hsl(229, 25%, 31%)
// - Score Text: hsl(229, 64%, 46%)
// - Header Outline: hsl(217, 16%, 45%)