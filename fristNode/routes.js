const fs=require('fs');

const requestHandler=(req,res)=>{
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
        return res.end('<h1> this is working</h1>')
    }
 res.setHeader('Content-Type','text/html');
 res.write('<html>');
 res.write('<head><title>My frist Page</title><head>')
 res.write('<body> <h1> This is a h1 tage </h1> </body>')
 res.write('</html>');
 res.end();
}
module.exports=requestHandler;