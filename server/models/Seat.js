const mongoose = require('mongoose');
const seatSchema = new mongoose.Schema({

    isAvailable:{
        type: Boolean,
        default: true
    },
    seatViewUrl: {
        type: String,
        required: true
    },
    isHandicapped: {
        type: Boolean
    },
    position: {
        type: String,
        required: true
    }
});

const Seat = mongoose.model('Seat', seatSchema);
module.exports = Seat;