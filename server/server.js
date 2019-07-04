require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config');
const formidable = require('express-formidable');

const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})


app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.post('/api/users/uploadimage', formidable(), (req,res) => {
  cloudinary.uploader.upload(req.files.file.path, (result) => {
    console.log(result);
    res.status(200).send({
      public_id: result.public_id,
      url: result.url
    })
  }), {
    public_id: `${Date.now()}`,
    resourse_type: 'auto' //type uploaded files
  };
})



app.listen(process.env.PORT || 7778, () => console.log('👍'))












// app.post('/image-upload', (req, res) => {

//   const values = Object.values(req.files)
//   const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
//   Promise
//     .all(promises)
//     .then(results => res.json(results))
// })

// app.post('/image-upload-single', (req, res) => {
//   const path = Object.values(Object.values(req.files)[0])[0].path
//   cloudinary.uploader.upload(path)
//     .then(image => res.json([image]))
// })
