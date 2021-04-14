const express = require('express')
const app = express()
const router = require('./router')
const PORT = 3333

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

module.exports = app