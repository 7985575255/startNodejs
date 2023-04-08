const http=require('http');
const routes=require('./routes.js')

const server=http.createServer(routes)
server.listen(3000,'localhost',()=>{
    console.log('server is listen port no 3000 ')
})