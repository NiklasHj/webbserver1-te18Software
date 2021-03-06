const express = require('express')
const dBModule = require('./dBModule')
const personModel = require('./PersonModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.get('/', (req, res) => {
  res.render('pages/index.ejs', { name: "" })
})

app.post('/', (req, res) => {

  let person = personModel.createPerson(req.body.name, req.body.email, req.body.age)

  dBModule.storeElement(person)

  let displayName =  " " + req.body.name
  
  res.render('pages/index.ejs', { name: " " + displayName })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 
