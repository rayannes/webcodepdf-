const express = require ('express')
const app = express()
const PDFKit = require('pdfkit')
const fs = require('fs')
//questao dois
app.use(express.static('public'))
app.get('/relatorio',(req, res) =>{    
    const pdf = new PDFKit()    
    pdf.text('gerando um pdf com text simples')    
    pdf.end()    
    pdf.pipe(fs.createWriteStream('teste.pdf')).on('finish', () =>{        
        res.send('./relatorio/teste.pdf')})})
app.get('/relatorio/teste.pdf', function(req, res) {
            res.sendFile(__dirname + "/teste.pdf");
          })
app.listen(3000, () =>{    console.log('funcionando')}) 