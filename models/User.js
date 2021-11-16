const {Schema, model, Types, ObjectId} = require('mongoose')

const schema = new Schema({
  social_id: {type: String,required:false,unique:true},
  avatar_url:{type:String,required:false},
  email: {type: String, required: false, unique: true},
  name:{type:String, required: true},
  family_name:{type:String, required:false},
  creation_date:{type:Date, default: Date.now}
})

module.exports = model('User', schema)
