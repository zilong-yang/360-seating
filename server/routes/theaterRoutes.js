const express = require('express');
const router = express.Router();

const theaterController = require('../controllers/theaterController');

router.route("/mapAuditoriums")
    .get(theaterController.mapAuditoriums);

router.route('/getAuditoriumAvailability/:roomNumber')
    .get(theaterController.getAuditoriumAvailability);

router.route('/getRoomByMovieName')
    .get(theaterController.getRoomByMovieName);

router.route("/seats/:roomID")
    .get(theaterController.getSeats)
    .put(theaterController.setSeatAvailability)

module.exports = router;