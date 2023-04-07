const http=require('http');
const fs= require('fs');

const server=http.createServer((req,res)=>{
    let path ='index.html';
    switch(req.url){
        case '/contect':
    path +='view.html'
         break;
        case '/about':
    path +='about.html';
        break;
        default: '404.html'

    }
 fs.readFile(path,(err,fileData)=>{
    if(err){
        console.log(err)
    }else{
        res.write(fileData);
        res.end();
    }
 })

})
server.listen(3000,'localhost',()=>{
    console.log('server is listen port no 3000 ')
})