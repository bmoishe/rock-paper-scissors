import { RulesModalStyles, RulesModalBackgroundStyles } from './RulesModal.styles'
import Rps from '../Rps'
import logo from '../../logo.svg'
import rules from '../../images/image-rules-bonus.svg'
import { Fragment } from 'react'
function RulesModal(props) {

  return (
    <Fragment>
      <RulesModalBackgroundStyles/>
      <RulesModalStyles>
        <h1>Rules</h1>
        <button onClick={() => props.setDisplayRules(false)}> <img src='' alt='Close'/></button>
        <img src={rules} alt='rules'/>
      </RulesModalStyles>
    </Fragment>
  );
}

export default RulesModal;
