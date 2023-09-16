const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    },
})

const User = new mongoose.model('users', userSchema);

module.exports = User;