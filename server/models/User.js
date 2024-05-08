//user id,password,user mail,user name,profile image

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: Number,
        required: true
    }
});
userSchema.methods.comparePassword = function (candidatePassword) {
    return candidatePassword === this.password;
  };

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;
