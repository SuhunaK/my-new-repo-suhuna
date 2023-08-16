const axios=require('axios')
const express=require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
   
const router = express.Router();
//models
const implements = require('../models/implements')
const agro = require('../models/agro')
router.get('/',async(req,res)=>{
    const get_classify = await agro.find({})

    res.render('home',{
        agros:get_classify
    })
})
router.get('/implements/:name',async(req,res)=>{
    const implement=req.params.name
    const get_implements = await implements.find({
        implements: implement
    })
    res.render('implements',{
        implements:get_implements,
        implement_name:implement
    })
})
router.get('/implements/:name/:implement_name',async(req,res)=>{
    const implement_name=req.params.implement_name
    const get_implements_name = await implements.find({
        name: implement_name
    })
    res.render('implement_inner',{
        specific_name:implement_name,
 specific_implement:get_implements_name
    })
})
router.get('/search',async(req,res)=>{
    let search_term=req.query.term;
    const get_implements = await implements.find({})
    let array=[];
   for(let i=0;i<get_implements.length;i++){
    if((get_implements[i].name.toLowerCase()).includes(search_term.toLowerCase()) || (get_implements[i].function.toLowerCase()).includes(search_term.toLowerCase()) || (get_implements[i].General_Information.toLowerCase()).includes(search_term.toLowerCase())){
        array.push(get_implements[i])
    }
   }
   res.render('search',{
    search_result:array,
    search_term:search_term
   })
})
module.exports = router;