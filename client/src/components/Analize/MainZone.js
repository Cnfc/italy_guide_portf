import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import { API_URL } from './config';

import FileUpload from './FileUpload';

class MainZone extends Component {

  state = {
    uploading: false,
    images: []
  };

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({
      uploading: true
    })
    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, files)
    })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false, 
        images
      });
    })
  };

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

    render () {
      const { uploading, images } = this.state;
      
      const content = () => {
        switch(true) {
          case uploading:
            return <Spinner />
          case images.length>0:
            return <Images images={images} removeImage={this.removeImage} />
          default: 
            return <Buttons onChange={this.onChange} />
        }
      } 
    return (
      <section className="upload_buttons">
        {/* { content() } */}

        <FileUpload 
          imagesHandler={(images) => this.imagesHandler(images )}
        />
        
        <button>Обработать</button>

      </section>
    );
  }
}

export default MainZone;





















// import React, { Component } from 'react'
// import axios from 'axios';

// class MainZone extends Component {

//   state ={
//     file: null
//   }
  
//   handleFile(e) {
//     let file = e.target.files[0]
//     this.setState({
//       file 
//     })
//   }

//   handleUpload (e) {
//     console.log (this.state, 'State');

//     let file = this.state.file;
//     let formdata = new FormData();

//     formdata.append('image', file);
//     formdata.append('name', 'Artur');


//     axios({
//       url: '/some/api',
//       method: "POST",
//       headers: {
//         auth: 'your token'
//       },
//       data: formdata
//     }).then((res) => {
      
//     }, (err) => {

//     })
//   }

//     render () {
//     return (
//       <div>
//         <h1>The Form</h1>
//         <form>
//           <div>
//             <label>Select File</label>
//             <input type="file" name="file" onChange={(e) => this.handleFile(e)}/>

//           </div>
//           <button type="button" onClick={(e) => this.handleUpload(e)}>Upload</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default MainZone;