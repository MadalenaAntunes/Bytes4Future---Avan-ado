const express = require('express') 
const app = express() // cria variavel para que possa ser utilizada
const port = 3000

app.get('/hey', (req, res) => { // Endpoint ("/" significa que está na raiz deste mesmo ficheiro)
  res.send('<h1 style = "color: blue">Hello World!</h1>')
})

app.get('/api/:nome', (req, res) => { 
  const name = req.params.nome //params.nome é como this.nome nos objetos
  res.send(`<div style = "color: purple">${name}</div>`)
})

app.get('/abc', (req, res) => { 
  if (req.query.name) {
    res.send(`Hello, ${req.query.name}`)
  } else {
    res.send(`Hello, World!`)
  }
})

app.get('/yo', (req, res) => {
  if (req.query.name && req.query.age) {
    const {name, age} = req.query;
    res.send(`Hello, ${name}(${age})`)
  } else if (req.query.name) {
    res.send(`Hello, ${req.query.name}`)
  } else {
    res.send(`Hello, World`)
  }
})

app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`)
})
