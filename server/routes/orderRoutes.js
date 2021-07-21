const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.route('/getOrders')
    .get(orderController.getOrders);

router.route('/addOrder')
    .post(orderController.addOrder);

module.exports = router;
