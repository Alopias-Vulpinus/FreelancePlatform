const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    user_data_id:{type:String},
    rating:{type:Number,'default':0},
    assigned_tasks_ids:{type:[String]},
    skills:{type:[String]}
  })
  
  module.exports = model('Freelancer', schema)