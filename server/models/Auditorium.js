const mongoose = require('mongoose');
const auditoriumSchema = new mongoose.Schema({

    seats:[SeatSchema],
    roomNumber: {
        type: Number,
        required: true
    },
    nowPlayingMovie: {
        type: String,
    }

});

const Auditorium = mongoose.model('Auditorium', auditoriumSchema);
module.exports = Auditorium;