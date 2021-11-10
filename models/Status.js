const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{type:String, required: true},
    numeric_value:{type:Number},
  })
  
  module.exports = model('Status', schema)