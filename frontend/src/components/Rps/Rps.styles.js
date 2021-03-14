import styled from 'styled-components'


export const RpsStyles = styled.div`
  border-radius:50%;
  height:${props => props.selection ?'100px':'200px'};
  width:${props => props.selection ?'100px':'200px'};
  border:${props => props.colorEnd} 17px solid;
  padding:2px;
  background-color: white;
  cursor:${props => props.selection &&'pointer'};
  box-shadow: inset 0 ${props => props.selection ?'5px':'20px'} 0 hsl(216, 13%, 77%), 0 ${props => props.selection ?'5px':'20px'} 0 ${props => props.colorStart};
  box-shadow: inset 1px 2px ${props => props.selection ?'5px':'20px'} gray;

  .rps {
    position: relative;
    top:25%;
    left:25%;
    height:${props => props.selection ?'50px':'100px'};
    width:${props => props.selection ?'50px':'100px'};
  }

  :hover {
    padding:${props => props.selection &&'4px'};
    /* border:${props => props.colorEnd} 20px solid; */
  }
`
