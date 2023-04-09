
const express=require('express');

const app=express();

app.use((req, res,next)=>{
    res.send('<h1> Express is working Now </h1>')
})


app.listen(3000);
