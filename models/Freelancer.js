const {Schema, model, Types} = require('mongoose')
const User = require('./User').schema
const Contact = require('./Contact').schema
const Rating = require('./Rating').schema
const Task = require('./Task').schema


const schema = new Schema({
    user_data:{type: User,required: true},
    assigned_tasks:{type:[Task]},
    skills:{type:[String]},
    constacts: {type: [Contact]},
    rates:{type:[Rating]}
})
  
module.exports = model('Freelancer', schema)