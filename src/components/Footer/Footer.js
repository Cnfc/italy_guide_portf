import React, {Component} from 'react';

import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <footer>
        <span>LOGO</span>
        <p className='footer_p'>Если вы хотите, чтобы ваше приложение появилось в нашем маркетплейсе, обращайтесь</p><span className='footer_mail'>info@cobrain.io</span>
        <span className="footer_contacts">Контакты</span>
      </footer>
    )
  }
}

export default Footer;