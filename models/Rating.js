const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    user_to:{type:String, required: true},
    user_from : {type: String, required: true},
    rating: {type: Number, required: true}
});

module.exports = model('Ratings', schema);
