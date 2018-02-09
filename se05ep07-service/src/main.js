const {knex} = require('./config')
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const routerFesta = require('./festa').router
const routerConvidado = require('./convidado').router

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/festa', routerFesta)
app.use('/convidado', routerConvidado)


knex.migrate.latest().then( _ => {
  app.listen(3000, _ => {
    console.log('Server online')
  })
})