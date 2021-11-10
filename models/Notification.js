const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    task_id:{type:String,required:true},
    content:{type:String,required:true},
    destination_id:{type:String,required:true}
  })
  
  module.exports = model('Notification', schema)
  