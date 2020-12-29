const {Schema, model} = require('mongoose')

const file = new Schema({
    _id: {type: String},
    i: {type: Buffer},
    m: {type: String}
})

const f = model("File", file)

module.exports = {f}
