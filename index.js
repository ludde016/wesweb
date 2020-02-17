const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => {
  res.sendFile(clientDir + 'index.html')
})
app.get('/indexCSS.css', (req, res) => {
  res.sendFile(clientDir + 'indexCSS.css')
})

app.get('/bajs', (req, res) => {
  res.sendFile(clientDir+'Karl-bertil.jpg')
})

app.post('/form', (req, res) => {
  const name = req.body.name
  console.log(name)
})
app.listen(port, () => console.log(`Example app listening on port port!`))