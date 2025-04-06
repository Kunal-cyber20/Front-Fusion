const express = require('express');
const Model = require('../models/UserModels');

const router = express.Router();

router.post('/add', (request, response) => {
    console.log(request.body);
    
    new Model(request.body).save()
        .then((result) => {
            response.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            response.status(500).json(error);
            response.status(500).json(error);
        });
} );

// : denotes url parameter
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//getall
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

// getbyid
router.get('/getbyid', (req, res) => {
    res.send('get by id');
})

// update
router.get('/update', (req, res) => {
    res.send('update');
})

//delete
router.get('/delete', (req, res) => {
    res.send('delete');
})


module.exports = router;