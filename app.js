const express = require('express')
const app = express()
const router = require('./router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api', router)

module.exports = app