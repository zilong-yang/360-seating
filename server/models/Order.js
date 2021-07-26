const mongoose = require('mongoose');
const movieOrderDetailsSchema = require('./MovieOrderDetails').schema;
const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    movieOrderDetails: [movieOrderDetailsSchema],
    total:{
        type: Number
    }   
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;