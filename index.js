const express = require('express')
const consign = require('consign')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))

consign()
  .include('db.js')
  .then('models')
  .then('associations.js')
  .then('auth.js')
  .then('middleware.js')
  .then('routes')
  .then('boot.js')
  .into(app)
