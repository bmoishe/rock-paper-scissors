import { RpsStyles } from './Rps.styles'
function Rps(props) {

  return (
    // <RpsStyles>
      <RpsStyles colorStart={props.colorStart} colorEnd={props.colorEnd} src={props.choice} alt={props.choice}/>
    // </RpsStyles>
  );
}

export default Rps;
