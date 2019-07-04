import React from 'react'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='single'>
       Only One Image
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>
    
    <div className='button'>
      <label htmlFor='multi'>
        Multi Images
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>
</div>