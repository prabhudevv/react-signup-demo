const express = require('express')
const router = express.Router();

const User = require('../../../models/user');
router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        fullname: req.body.fullname,
        uname: req.body.uname,
        password: req.body.password
    })
    newUser.save().then(user => {
        res.json({
            data: user,
            success: true,
            msg: 'Data saved successfully'
        })
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;