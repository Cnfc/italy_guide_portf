import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import faCloud from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';


class FileUpload extends Component {
  
  state = {
    uploadedFiles: [],
    uploading: false

  }
  onDrop = (files) => {
    this.setState({
      uploading: true
    })
    let formData = new FormData();
    const config = {
      header: {'content-type': 'multipart/form-data'}
    }

    formData.append('file', files[0]);

    axios.post('http://localhost:7778/api/users/uploadimage', formData, config)
      .then(response => { 
      console.log(response.data)

      this.setState({
        uploading: false,
        uploadedFiles: [
          ...this.state.uploadedFiles,
          response.data
        ]
      }, () => {
        this.props.imagesHandler(this.state.uploadedFiles)
      })
    });
  }

  onLooks = (id) => {

  }

  showUploadedImages = () => (
    this.state.uploadedFiles.map((item => (
      <div 
        className="dropzone_box" 
        key={item.public_id}
        onClick={() => this.onLooks(item.public_id)}
      >
        <div className="wrap" style={{background: `url(${item.url}) no-repeat`, zIndex:2}}>

        </div>

      </div>
    )))
  )

  render() {
    return (
      <React.Fragment>
        <Dropzone
          onDrop={(e) => this.onDrop(e)}
          multiple={false}
          className="dropzone_box"
        >
          <div className="wrap">
            <FontAwesomeIcon icon={faCloud} />
            <span>Перетащите картинку сюда или </span>
            <span><button>Выберите файл на компьютере</button></span>
          </div>
        </Dropzone>
        {this.showUploadedImages()}

        {
          this.state.uploading ?
          <div className="dropzone_box" style={{
            textAlign: 'center',
            paddingTop: '60px'
          }}>
            <CircularProgress 
              style={{color: '#00bcd4'}}
              thickness={7}
            />
          </div>
          : null
        }
      </React.Fragment>
    );
  }
}

export default FileUpload;