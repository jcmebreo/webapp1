const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personListSchema = new Schema({
    personName: {
        type: String,
        required: true
    },
    bDate: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    tZoneID: {
        type: String,
        required: true
    }
}, {timestamps: true });

const pName = mongoose.model('personList', personListSchema) 
module.exports = pName;