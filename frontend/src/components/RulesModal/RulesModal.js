import { RulesModalStyles, RulesModalBackgroundStyles } from './RulesModal.styles'
import Rps from '../Rps'
import logo from '../../logo.svg'
import rules from '../../images/image-rules-bonus.svg'
import close from '../../images/icon-close.svg'
import { Fragment } from 'react'
function RulesModal(props) {

  return (
    <Fragment>
      <RulesModalBackgroundStyles/>
      <RulesModalStyles>
        <header>
          <h1>Rules</h1>
          <button onClick={() => props.setDisplayRules(false)}> <img src={close} alt='Close'/></button>
        </header>
        <img src={rules} alt='rules'/>
      </RulesModalStyles>
    </Fragment>
  );
}

export default RulesModal;
