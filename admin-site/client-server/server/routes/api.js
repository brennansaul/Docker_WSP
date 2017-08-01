const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/admin-site';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
  cid: String,
  views: Number
});

// create mongoose model
const Container = mongoose.model('Container', ContainerSchema);


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

/* GET all users. */
router.get('/containers', (req, res) => {
    User.find({}, (err, containers) => {
        if (err) res.status(500).send(error)

        res.status(200).json(containers);
    });
});

/* GET one users. */
router.get('/containers/:id', (req, res) => {
    User.findById(req.param.id, (err, containers) => {
        if (err) res.status(500).send(error)

        res.status(200).json(containers);
    });
});

/* Create a user. */
router.post('/containers', (req, res) => {
    let container = new Container({
        cid: req.body.cid,
        views: req.body.views
    });

    container.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Container created successfully'
        });
    });
});


module.exports = router;
