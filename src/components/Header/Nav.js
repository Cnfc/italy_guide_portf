import React from 'react'

import logo from 'tools/next.svg'
import './Header.css';

const Nav = (props) => {
  return (
    <div className='header_navigation'> 
      <span className='header_nav'>Главная</span> 
      <span className="chevron_right"><img  src={logo} alt={'logo'} /></span>
      <span className='header_nav-add'>Анализ флюораграмм</span>
    </div>
  )
};

export default Nav;