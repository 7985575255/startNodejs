const http=require('http');
const fs= require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
 res.write('<html>');
 res.write('<head><title>My frist Page</title><head>')
 res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"> Button</button></form> </body>')
 res.write('</html>');
  return res.end();
    }
    if(url==='/message' && method==='POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        return res.end()
    }
 res.setHeader('Content-Type','text/html');
 res.write('<html>');
 res.write('<head><title>My frist Page</title><head>')
 res.write('<body> <h1> This is a h1 tage </h1> </body>')
 res.write('</html>');
 res.end();

})
server.listen(3000,'localhost',()=>{
    console.log('server is listen port no 3000 ')
})