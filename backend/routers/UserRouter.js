const express = require('express');
const Model = require('../models/UserModels');
const { model } = require('mongoose');

const router = express.Router();

router.post('/add', (request, response) => {
    console.log(request.body);
    
    new Model(request.body).save()
        .then((result) => {
            response.status(200).json(result);
        })
        .catch((error) => {
            if(error?.code === 11000){
                response.status(400).json({ message: 'Email already exists' });
            }else{
                response.status(500).json({ message: 'Some error occurred' });
            }
            console.log(error);
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
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

// getbyemail
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body , { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

//delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})






module.exports = router;