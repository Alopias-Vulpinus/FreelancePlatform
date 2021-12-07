const {Schema, model, Types} = require('mongoose')
const User = require('./User').schema
const Rating = require('./Rating').schema
const Skill = require('./Skill').schema


const schema = new Schema({
    user_data:{type: User,required: true},
    assigned_tasks:[{type:Types.ObjectId, ref: 'Task'}],
    skills:{type:[String]},
})
  
module.exports = model('Freelancer', schema)