const http = require('http');

const url = require('url');

const fs = require('fs')

const port = 7000;

const server = http.createServer((req,res)=>{

    const x = url.parse(req.url, true)
    const name = x.query.name

    if(!name){
        fs.readFile('index.html', function(err,data){
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(data);
            return res.end();
        })
    }else{
        fs.writeFile("arquivo.txt", name, function(err,data){
            res.writeHead(302, {
                location: "/"
            })
            return res.end()
        })
    }
})

server.listen(port, ()=> {
    console.log(`Servidor executando na porta ${port}`);
})