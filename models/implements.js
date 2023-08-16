const mongoose = require('mongoose')

const implement= new mongoose.Schema({
implements:{
type:String,
    required:true
},
name:{
type:String,
    required:true
},
function:{
type:String
},
Specifications:{
type:String
},
General_Information:{
    type:String
},
Cost_of_the_unit:{
    type:String
},
image_url:{
    type:String
  },
  buy_now_url:{
    type:String
  }
})

module.exports = mongoose.model('implement',implement)