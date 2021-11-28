const {Schema, model, Types} = require('mongoose')
const User = require('./User').schema
const Task = require('./Task').schema

const schema = new Schema({
    user_data:{type:User, required: true},
    tasks:{type:[Task]}
  });
  
module.exports = model('Customer', schema)