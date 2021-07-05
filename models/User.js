const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sample: {
        type: Number,
        min: 1,
        max: 60,
        required: true
    },
    sample: {
        type: Number,
        min: 1,
        max: 600,
        required: true
    }

});

module.exports = mongoose.model('UserSchema', UserSchema);