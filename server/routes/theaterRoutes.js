const express = require('express');
const router = express.Router();

const theaterController = require('../controllers/theaterController');

router.route("/mapAuditoriums")
    .get(theaterController.mapAuditoriums);

router.route('/getAuditoriumAvailability/:roomNumber')
    .get(theaterController.getAuditoriumAvailability);

router.route('/getRoomByMovieName')
    .get(theaterController.getRoomByMovieName);

module.exports = router;