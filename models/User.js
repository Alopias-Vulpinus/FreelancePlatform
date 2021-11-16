const {Schema, model, Types, ObjectId} = require('mongoose')

const schema = new Schema({
  sosial_id: {type: ObjectId,required:false,unique:true},
  avatar_url:{type:String,required:false,unique:false},
  email: {type: String, required: false, unique: true},
  password: {type: String, required: true},
  name:{type:String, required: true},
  family_name:{type:String, required:false},
  creation_date:{type:Date, required: true},
  role_id:{type:String,required:true}
})

module.exports = model('User', schema)
