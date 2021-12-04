const {Schema, model, Types} = require('mongoose')
const Role = require('./Role').schema

const schema = new Schema({
  social_id:{type:String,required: true},
  email: {type: String},
  name:{type:String, required: true},
  family_name:{type: String},
  role:{type: Role}
})

module.exports = model('User', schema)
