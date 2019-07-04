require('dotenv').config();
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')

const app = express()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})


app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 


app.use(formData.parse())

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
})

app.post('/image-upload-single', (req, res) => {
  const path = Object.values(Object.values(req.files)[0])[0].path
  cloudinary.uploader.upload(path)
    .then(image => res.json([image]))
})

app.listen(process.env.PORT || 7778, () => console.log('👍'))