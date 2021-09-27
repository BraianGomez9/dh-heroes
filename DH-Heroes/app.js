let express = require('express')
const app = express();
const PORT = 3030
let path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
})

app.get('/beeners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/beeners-lee.html"))
})

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
})

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
})

app.get('/hoper', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hoper.html"))
})

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/lovelace.html"))
})

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/turing.html"))
})


app.use(express.static('public/img'));

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto${PORT}
http://localhost:${PORT}`
))
 