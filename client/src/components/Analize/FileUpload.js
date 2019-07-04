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

  showDropzoneEmpty() {
    return (
      <Dropzone
      onDrop={(e) => this.onDrop(e)}
      multiple={false}
      className="dropzone_box"
      >
      <div className="wrap">
        <FontAwesomeIcon className="analize_cloud_favicon" icon={faCloud} />
        <span className="analize_drop_header">Перетащите картинку сюда или </span>
        <span style={{ margiTop: '-32px'}}><button className="analize_drop_button">Выберите файл на компьютере</button></span>
      </div>
      </Dropzone>
      )
  }

  showDropzoneFull() {
    return (
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
  }

  showRenderButton() {
    return (
      <section className="analize_buttons_area">
        <button className="analize_button"><span className="analize_text">Обработать</span></button>
      </section>
    )
  }

  showRenderLoading() {
    return(
      <div className="analize_buttons_area" style={{
        flexDirection: 'column',
        textAlign: 'center',
        paddingTop: '60px'
      }}>
        <CircularProgress 
          style={{color: '#00bcd4'}}
          thickness={7}
        />
        <h3 className="analize_drop_loading_text">Для просмотра результата дождитесь завершения обработки или проверьте электронную почту</h3>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>

        {
          this.state.uploadedFiles.length===0 
          ? this.showDropzoneEmpty()
          : this.showDropzoneFull()
        }
        
        
        {
          this.state.uploading 
          ? this.showRenderLoading()
          : this.showRenderButton()
        }
      </React.Fragment>
    );
  }
}

export default FileUpload;