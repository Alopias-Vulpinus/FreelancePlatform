const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{type:String, required: true,  unique: true}
  })
  
  module.exports = model('Role', schema)