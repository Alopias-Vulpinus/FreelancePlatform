const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{type:String, required: true,sparse: true}
  })
  
  module.exports = model('Role', schema)