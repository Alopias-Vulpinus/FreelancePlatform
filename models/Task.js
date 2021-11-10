const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    status_id:{type:String,required:true},
    freelancer_id:{type:String},
    customer_id:{type:String,required:true},
    payment:{type:Number,required:true},
    due_data:{type:Date},
    accetance_criteria:{type:String},
    process:{type:Number}
  })
  
  module.exports = model('Task', schema)