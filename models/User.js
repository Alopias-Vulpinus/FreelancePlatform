const {Schema, model, Types} = require('mongoose')
const Role = require('./Role').schema
const Rating = require('./Rating').schema

const schema = new Schema({
  social_id:{type:String,required: true},
  email: {type: String},
  image_url:{type: String},
  name:{type:String, required: true},
  family_name:{type: String},
  role:{ type: Types.ObjectId, ref:"Role" },
  status:{type: String},
  contact_me: {type: String},
  rates:{type: [Rating]}
})

module.exports = model('User', schema)
