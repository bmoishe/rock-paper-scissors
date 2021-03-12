import styled, {createGlobalStyle} from 'styled-components'

// export const AppStyles = styled.body`
//   height: 100vh;
//   font-family: 'Barlow Semi Condensed', sans-serif;
//   background-image: linear-gradient(180deg,hsl(214, 47%, 23%), hsl(237, 49%, 15%));
//   /* background-color:hsl(214, 47%, 23%); */
// `

export const AppStyles = createGlobalStyle`
  html {
     height: 100vh;
  }
  
  body {
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-image: linear-gradient(180deg,hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    height:100%;
  }
}
`


/* The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1366px

## Colors

### Primary

- Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)

### Neutral

- Dark Text: hsl(229, 25%, 31%)
- Score Text: hsl(229, 64%, 46%)
- Header Outline: hsl(217, 16%, 45%)

### Background

- Radial Gradient: hsl(214, 47%, 23%) to 
hsl(237, 49%, 15%)

## Fonts

- Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- Weights: 600, 700 */
