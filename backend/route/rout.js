const express=require('express');
const signupRout = require('../utils/signup');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send('data get succ')
})
route.post('/signup',signupRout);

// for export many use {name1,name2}
module.exports=route