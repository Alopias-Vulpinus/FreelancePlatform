const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    freelanser_id:{type:String, required: true},
    customer_id : {type: String, required: true},
    rate: {type: {type: Number, required: true}}
});

module.exports = schema;
