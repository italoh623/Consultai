const validator = require('validator')
const bcrypt = require('bcrypt')
const pacientCollection = require('../db').db().collection("pacients")

let Pacient = function(data) {
    this.data = data 
    this.errors = []
}

Pacient.prototype.cleanUp = function() {
    if (typeof(this.data.username) != "string") {this.data.username = ""}
    if (typeof(this.data.email) != "string") {this.data.email = ""}
    if (typeof(this.data.password) != "string") {this.data.password = ""}
    if (typeof(this.data.birthDate) != "string") {this.data.birthDate = ""}
    if (typeof(this.data.cpf) != "string") {this.data.cpf = ""}

    // se desfazer de propriedades invalidas
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password,
        birthDate: this.data.birthDate.trim(),
        cpf: this.data.cpf.trim()
    }
}

Pacient.prototype.validate = function() {
    return new Promise(async (resolve, reject) => {
        if (this.data.username == "") {this.errors.push("You must provide a username.")}
        if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers.")}
        if (this.data.password == "") {this.errors.push("You must provide a password.")}
        if (this.data.password.length > 50) {this.errors.push("Password cannot exceed 50 characters.")}
        if (this.data.username.length > 30) {this.errors.push("Username cannot exceed 30 characters.")}
    
        // Only if username is valid then check to see if it's already taken
        if (this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)) {
            let usernameExists = await pacientCollection.findOne({username: this.data.username})
            if (usernameExists) {this.errors.push("That username is already taken.")}
        }
    
        // Only if email is valid then check to see if it's already taken
        if (validator.isEmail(this.data.email)) {
            let emailExists = await pacientCollection.findOne({email: this.data.email})
            if (emailExists) {this.errors.push("That email is already being used.")}
        }
        resolve()
    })
}

Pacient.prototype.register = function() {
    return new Promise(async (resolve, reject) => {
        this.cleanUp()
        await this.validate()

        if (!this.errors.length) {
            // hash user password
            let salt = bcrypt.genSaltSync(10)
            this.data.password = bcrypt.hashSync(this.data.password, salt)
            let response = await pacientCollection.insertOne(this.data)
            resolve(response)
        } else {
            reject(this.errors)
        }
    })

}


module.exports = Pacient