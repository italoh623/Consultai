const express = require('express')
const router = express.Router()
const pacientController = require('./controllers/pacientController')

router.get('/', (req, res) => {
    res.send("router works")
})

router.post('/pacient', pacientController.register)

module.exports = router