import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'

import FileUpload from './FileUpload';

class MainZone extends Component {

  state = {
    formdata: {
      images: {
        value: '',
        validation: {
          required: false,
        },
        valid: true,
        validationmessage: ''
      }
    }
  };

  imagesHandler = (images) => {
    const newFormData = {
      ...this.state.formdata
    }

    newFormData['images'].value = images;
    newFormData['images'].valid = true;

    this.setState({
      formdata: newFormData
    })
  }

    render () {     
    return (
      <section className="analize_upload_area">

        <FileUpload 
          imagesHandler={(images) => this.imagesHandler(images )}
        />  
        
      </section>
    );
  }
}

export default MainZone;

