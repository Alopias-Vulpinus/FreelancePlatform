const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    author_id:{type:String,required:true},
    content:{type:String,required:true},
    destination_id:{type:String,required:true},
    is_checked:{type:Boolean,default:false}
  })
  
  module.exports = model('Message', schema)
  