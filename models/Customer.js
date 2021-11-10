const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    user_data_id:{type:String},
    tasks_ids:{type:[String]},
    notification_ids:{type:[String]}
  })
  
module.exports = model('Customer', schema)