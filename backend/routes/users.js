
const router = require('express').Router();
let User = require('../models/users.models');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
    const {firstname, lastname, email, password} = req.body;
    const newUser = new User({firstname, lastname, email, password});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router; 
