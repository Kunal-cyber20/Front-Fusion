const express = require('express');
const Model = require('../models/UserModels');

const router = express.Router();

router.post('/add', (request, response) => {
    response.send('response from user add');
} )

module.exports = router;