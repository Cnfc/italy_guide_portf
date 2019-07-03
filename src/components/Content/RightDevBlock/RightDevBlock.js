import React, {Component} from 'react';

import Raiting from 'components/Content/RightDevBlock/Raiting';

import LogoMed from 'tools/logoMed.svg'
import './RightDevBlock.css';
class RightBlock extends Component {

  render() {
    return (
      <div className="right_devblock">
      <div className="right_devblock_header">
        <h2 className="right_devblock_headername">РАЗРАБОТЧИК</h2>
      </div>
        <img className="right_devblock_logo" src={LogoMed} alt="Логотип фирмы"/>
        <Raiting />
        <p className="right_devblock_contact">Связаться с разработчиком</p>
        <p className="right_devblock_email"><a href="mailto:ASafin@ftizisbiomed.ru?subject=Contact us">ASafin@ftizisbiomed.ru</a></p>
      </div>
    );
  }
}

export default RightBlock;