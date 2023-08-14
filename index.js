const axios=require('axios')
const express=require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));
app.get('/start',(req,res)=>{
    res.send('success')
})
app.listen(5000,()=>{
    console.log('Server is running on 5000....')
})
