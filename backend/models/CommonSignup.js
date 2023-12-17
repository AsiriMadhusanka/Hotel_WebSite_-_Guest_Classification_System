const mongoose = require('mongoose');

const CommonSignupSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
        
    },

    name1:{
        type: String,
        required: false,
        
    },

    birthday:{
        type: Date,
        required: false,
        
    },

    gender:{
        type: String,
        required: false,
        
    },

    nic:{
        type: String,
        required: false,
        
    },

    email:{
        type: String,
        required: true,
        
    },
    number:{
        type: Number,
        required: false,
        maxLength: 10
    },

    inputpw:{
        type: String,
        required: false,
        
    },
    role:{
        type: String,
        
    },
    category:{
        type: String,
        required: false,
    }
        
});

const CommonSignup = mongoose.model('CommonSignup', CommonSignupSchema);
module.exports = CommonSignup;


// {
//     "name": "admin"
//     "name1": "Hettiarachchi",
//     "birthday": "1997-02-14",
//     "gender": "Male",
//     "nic": "132654789V",
//     "email": "admin@gamail.com",
//     "number": "0719883056",
//     "inputpw": "123456",
//     "role": "Admin"
// }