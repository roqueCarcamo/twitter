const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    content:{
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    location:{
        type:String,
        required: true
    }
    },{
        timestamps:true
});

module.exports = mongoose.model('tweet', schema);