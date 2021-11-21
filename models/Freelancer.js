const {Schema, model, Types} = require('mongoose')
const User = require('./User').schema

const schema = new Schema({
    user_data:{type: User,required: true},
    rating:{type:Number,'default':0},
    assigned_tasks_ids:{type:[String]},
    skills:{type:[String]}
  })
  
  module.exports = model('Freelancer', schema)