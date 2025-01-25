const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    role:{
        type: String,
        require: true,
        default: "Normal"
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    },
    {timestamps: true}
)


const User = mongoose.model('user',userSchema)

module.exports = User