const mongoose = require('mongoose');

const enrollSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    userID:{
        type: String,
        required: true
    }
});

const enroll = mongoose.model('Enroll', enrollSchema);
module.exports = enroll;

