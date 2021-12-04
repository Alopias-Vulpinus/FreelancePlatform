const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    link:{type: String, required: true },
    name:{type:String, required: true}
});


module.exports = schema;
