"use strict";

const express = require('express');
const router = express.Router();
const twests = require('./twests/routes');
const users = require('./users/routes');

router.use('/twests', twests);
router.use('/users', users);

module.exports = router;