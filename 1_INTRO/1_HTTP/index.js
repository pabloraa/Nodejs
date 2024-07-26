const http = require('http')

const port = 3000;

const server = http.createServer((req,res)=>{
    res.write("Seja bem vindo ao HTTP");
    res.end();
});

server.listen(port,()=>{
    console.log(`Servidor rodando no site http://localhost: ${port}`)
})