const Pacient = require('../models/Pacient')

exports.register = function(req, res){
    let pacient = new Pacient(req.body)
    pacient.register().then((data) => {
        res.json(data)
    }).catch(() => {
        res.status(400).send()
    })
}

