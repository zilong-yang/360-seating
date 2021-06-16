const express = require('express');
const router = express.Router();

const theaterController = require('../controllers/theaterController');

router.route("/mapAuditoriums")
    .get(theaterController.mapAuditoriums);

router.route('/getAuditoriumAvailability/:roomNumber')
    .get(theaterController.getAuditoriumAvailability);

module.exports = router;