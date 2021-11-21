const {Schema, model, Types} = require('mongoose')
const User = require('./User').schema

const schema = new Schema({
    user_data:{type:User, required: true},
    tasks_ids:{type:[String]},
    notification_ids:{type:[String]}
  })
  
module.exports = model('Customer', schema)