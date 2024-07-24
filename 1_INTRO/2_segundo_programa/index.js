const fs = require('fs') // file sistem

fs.readFile('arquivo.txt', 'utf8', (err,data)=>{
    if(err){
        console.log("Leitura não executada, verifique o nome do arquivo" + err)
        return
    }
    
        console.log("Leitura realizada com sucesso:" + data);
});