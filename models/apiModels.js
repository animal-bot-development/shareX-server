const {Schema, model} = require('mongoose')

const error = new Schema({
    _id: {type: String},
    e: {type: String} 
})

const err = model("Error", error)

module.exports = {err}