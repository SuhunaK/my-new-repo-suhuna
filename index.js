const axios=require('axios')
const express=require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const router = express.Router();
const path = require('path')   


const app = express();
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));

//hbs
app.set('views', path.join(__dirname,'views'))
app.set('view engine','hbs')
app.engine('hbs',hbs.__express)
//mongodb connection
// mongodb://localhost:27017
// mongodb+srv://sksugu103:K63YQ4TUp1G1PYEH@cluster0.fmrgxl8.mongodb.net/agro_implements
mongoose.connect('mongodb://127.0.0.1/agro_implements', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('DB Connected!!!')
})
//public directory
app.use(express.static(path.join(__dirname,'public')))

app.use('/', require('./routes/index.js'));
app.listen(5000,()=>{
    console.log('Server is running on 5000....')
})
