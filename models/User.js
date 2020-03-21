const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 8;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    signUpDate: {
        type: Date,
        default: Date.now()
    },
    favorites: {
        type: Array,
        default: []
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, saltRounds);
};

// Do not declare methods using ES6 arrow functions (=>). Arrow functions explicitly prevent binding "this".
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);