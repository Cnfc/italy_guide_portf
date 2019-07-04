import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import circularProgress from '@material-ui/core/CircularProgress';
import faCloud from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';


class FileUpload extends Component {
  
  state = {
    uploadedFiles: [],
    uploading: false

  }
  onDrop(e) {
    console.log(e)
  }

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
      </React.Fragment>
    );
  }
}

export default FileUpload;