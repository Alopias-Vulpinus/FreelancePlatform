const {Schema, model, Types} = require('mongoose')
const Status = require('./Status').schema
const Freelancer = require('./Freelancer').schema
const Customer = require('./Customer').schema


const schema = new Schema({
    status:{type:Types.ObjectId ,required:true, ref: 'Status'},
    title:{type:String, required: true},
    freelancer_id:{type:Types.ObjectId, ref: 'Freelancer'},
    customer_id:{type: Types.ObjectId, ref: 'Customer'},
    price:{type:Number,required:true},
    description:{type:String},
    creation_date:{type:Date, default: Date.now},
    candidates: [{type: Types.ObjectId, ref: 'Freelancer'}],
    is_assigned: {type: Boolean}
  });
  
  module.exports = model('Task', schema)