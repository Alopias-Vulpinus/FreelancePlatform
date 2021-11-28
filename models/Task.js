const {Schema, model, Types} = require('mongoose')
const Status = require('./Status').schema
const Freelancer = require('./Freelancer').schema
const Customer = require('./Customer').schema


const schema = new Schema({
    status:{type:Status,required:true},
    title:{type:String, required: true},
    freelancer:{type:String},
    customer:{type:String,required:true},
    payment:{type:Number,required:true},
    due_date:{type:Date},
    acceptance_criteria:{type:String},
    progess:{type:Number},
    creation_date:{type:Date, default: Date.now},
    potential_performers: {type: [Freelancer]}
  });
  
  module.exports = model('Task', schema)