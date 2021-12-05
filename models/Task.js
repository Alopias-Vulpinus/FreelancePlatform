const {Schema, model, Types} = require('mongoose')
const Status = require('./Status').schema
const Freelancer = require('./Freelancer').schema
const Customer = require('./Customer').schema


const schema = new Schema({
    status:{type:Status,required:true},
    title:{type:String, required: true},
    freelancer_id:{type:String},
    customer_id:{type:String,required:true},
    price:{type:Number,required:true},
    due_date:{type:Date},
    description:{type:String},
    progess:{type:Number},
    creation_date:{type:Date, default: Date.now},
    candidates: {type: [String]},
    is_assigned: {type: Boolean}
  });
  
  module.exports = model('Task', schema)