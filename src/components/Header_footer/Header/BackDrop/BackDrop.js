import React from 'react';

import './BackDrop.css';

const BackDrop = (props) => {
  console.log(props);
  return (
    <div className='backdrop' onClick={props.clickToClose} />
  )
};

export default BackDrop;