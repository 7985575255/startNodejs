const express=require('express');
const router=express.Router();

router.get('/',(req, res,next)=>{
    res.send('<h1> This is  a shoping page and this is working </h1>')
    
})
module.exports=router;