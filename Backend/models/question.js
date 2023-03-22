const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true,
    },
    // upvotes:{
    //     type:Number,
    //     default:0,
    // },
    // downvotes:{
    //     type:Number,
    //     default:0
    // }

})
module.exports = mongoose.model('Question', questionSchema)