const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')
const port = 3333

mongodb.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client
    const app = require('./app')
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})