const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url:{
        type: String,
        required: true,
    },
    dateofcreation: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Images', ImageSchema);