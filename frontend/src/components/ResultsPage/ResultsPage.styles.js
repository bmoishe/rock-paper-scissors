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
`)
