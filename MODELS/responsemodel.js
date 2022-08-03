const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ""
    },
    dateofcreation: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Responses', ResponseSchema);