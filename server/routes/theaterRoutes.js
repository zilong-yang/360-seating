const express = require('express');
const router = express.Router();

const theaterController = require('../controllers/theaterController');

router.route("/mapAuditoriums")
    .get(theaterController.mapAuditoriums);

module.exports = router;