import React from 'react';

import './DrawerToggleButton.css' 

const drawerToggleButton = (props) => {
  return (
    <button className='header_toggle-button' onClick={props.click}> 
      <div className='header_toggle-button__line' />
      <div className='header_toggle-button__line' />
      <div className='header_toggle-button__line' />
    </button>
  )
};

export default drawerToggleButton;