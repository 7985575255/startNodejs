
const express=require('express');
const productRoute=require('./routes/product');
const shoping=require('./routes/shop');
const body_parser=require('body-parser');

 const app=express();
app.use(body_parser.urlencoded({extended:false}))
 
app.use(productRoute);
app.use(shoping);

app.use((req,res,next)=>{
res.status(404).send('<h1> The page is not found</h1>')
})

app.listen(3000);
