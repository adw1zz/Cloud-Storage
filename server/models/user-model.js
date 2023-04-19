const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    nickname: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: false, required: true},
})

module.exports = model('User', UserSchema);