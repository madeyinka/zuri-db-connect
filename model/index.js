const mongoose = require('mongoose')

const payloadSchema = new mongoose.Schema({
    name: {type: String, default:""},
    email: {type: String, unique:true, default:""},
    country: {type: String, default:""}
})

const payloadModel = mongoose.model('Payload', payloadSchema)
module.exports = payloadModel
