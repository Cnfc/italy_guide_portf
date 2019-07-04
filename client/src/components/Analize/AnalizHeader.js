import React from 'react';


import logo from 'tools/logoMed.svg'
import logoPerson from 'tools/logo_man.svg';

import './Analize.css';

const AnalizHeader = (props) => {
  return (
    <div className='analize_header'> 
        <img className="analize_header_logo_man" src={logoPerson} alt="logo Person"/>
        <h1 className='analize_header_text'>Анализ  флюорограмм</h1>
        <img className="analize_header_logo" src={logo} alt="logo Med"/>
    </div>
  )
};

export default AnalizHeader;