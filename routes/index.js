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
module.exports = router;