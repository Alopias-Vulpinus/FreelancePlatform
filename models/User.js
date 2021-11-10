const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name:{type:String, required: true},
  creation_date:{type:Date, required: true},
  role_id:{type:String,required:true}
})

module.exports = model('User', schema)
