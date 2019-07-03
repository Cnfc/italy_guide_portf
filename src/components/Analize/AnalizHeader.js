import React from 'react';


import logo from 'tools/logoMed.svg'
import logoPerson from 'tools/logo_man.svg';

import './Analize.css';

const AnalizHeader = (props) => {
  return (
    <div className='analize_header'> 
        <img className="" src={logoPerson} alt="logo Person"/>
        <h1>Анализ  флюорограмм</h1>
        <img className="" src={logo} alt="logo Person"/>
    </div>
  )
};

export default AnalizHeader;