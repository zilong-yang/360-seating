const mongoose = require('mongoose');
const AuditoriumSchema = require('./Auditorium').schema;
const theaterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    rooms: [AuditoriumSchema],
    hoursOfOperation: {
        type: String,
        required: true
    }

});

const Theater = mongoose.model('Theater', theaterSchema);
module.exports = Theater;