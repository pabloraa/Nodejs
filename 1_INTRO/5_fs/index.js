const http = require('http');

const url = require('url');

const fs = require('fs')

const port = 7000;

const server = http.createServer((req,res)=>{
    fs.readFile('mensagem.html', function(err,data){
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(port, ()=> {
    console.log(`Servidor executando na porta ${port}`);
})