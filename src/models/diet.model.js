const {Schema, model, connect} = require('mongoose')


const dietSchema = new Schema({
    name: {type: String, required:true}
})

const Diet = model('Diet', dietSchema)

module.exports = Diet