const fs = require('fs')

var a = 3
var b = 8
var soma = 0
soma = a + b 
console.log(soma)

const fileName = 'arquivo.txt'

fs.writeFile(fileName, soma.toString(), 'utf8' , (err)=>{
    if(err){
        console.log("Não foi possível escrever no arquivo texto!")
    }
    else{
        console.log("Escrita realizada com sucesso no arquivo texto");
    }
})

fs.readFile(fileName, 'utf8',(err,data)=>{
    if(err){
        console.log("Não foi possíve ler o conteúdo do arquivo!");
    }
    else{
        console.log("Conteúdo do arquivo:", data);
    }
})