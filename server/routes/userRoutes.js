const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.route("/login")
    .get(userController.login);


module.exports = router;