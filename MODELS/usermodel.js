const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    dateofcreation: {
        type: Date,
        default: Date.now,
    },
    PassingYear: {
        type: Number,
        default: 0000
    },
    dp: {
        type: String,
        default: ""
    }

});

module.exports = mongoose.model('User', UserSchema);