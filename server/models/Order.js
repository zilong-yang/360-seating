const mongoose = require('mongoose')
const movieOrderDetailsSchema = require('./movieOrderDetailsSchema').schema;
const orderSchema = new mongoose.Schema({
    orderID:{
        Type: Number,
        required: true
    },
    name:{
        Type: String,
        required: true
    },
    email:{
        Type: String,
        required: true
    },
    phoneNumber:{
        Type: String,
        required: true
    },
    movieOrderDetails: [movieOrderDetailsSchema],
    total:{
        Type: Number
    }   
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;