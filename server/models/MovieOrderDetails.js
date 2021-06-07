const mongoose = require('mongoose')
const movieOrderDetailsSchema = new mongoose.Schema({

    movieName: {
        type: String,
        required: true
    },

    movieStartTime: {
        type: String,
        required: true
    },

    movieAuditorium: {
        type: Number,
        required: true
    },

    seats: [{
        position: {
            type: String,
            required: true
        }
    }]

})

const MovieOrderDetails = mongoose.model('MovieOrderDetails', movieOrderDetailsSchema);
module.exports = MovieOrderDetails;
