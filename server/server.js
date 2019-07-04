const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');
require('dotenv').config();


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})


app.get('/s', (req, res) => {

    res.status(200).send({
      "some" : "soem"
    })
})

app.post('/api/users/upload_image', formidable(), (req, res) => {
  cloudinary.uploader.upload(req.files.file.path, (result)=>{
    console.log(result);

    res.status(200).send({
      public_id: result.public_id,
      url: result.url,
      "SOME" : "soem"

    })
  },{
    public_id:`${Date.now()}`,
    resource_type: 'auto'
  })
})


const port = process.env.PORT = 3002;

app.listen(port, ()=> {
  console.log(`My Server running at ${port}`);
});