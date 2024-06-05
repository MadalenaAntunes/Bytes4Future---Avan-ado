const express = require('express') 
const app = express() 
const port = 3001

app.post('/exercicio/:name/:contact', (req, res) => {
    //API
    const {name, contact} = req.params
    const { message } = req.query.message
    console.log(message, name, contact)

    dados.push({
        message: message,
        name: name,
        contact: contact
    })

    res.json({
        novoComprimento: dados.length
    })
  })
  
  app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
  })
  