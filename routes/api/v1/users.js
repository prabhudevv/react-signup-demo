const express = require('express')
const router = express.Router();
var md5 = require('md5');

const User = require('../../../models/user');
router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        fullname: req.body.fullname,
        uname: req.body.uname,
        password: md5(req.body.password)
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

router.get('/:uname', (req, res) => {
    User.find({
        uname: req.params.uname
    }).then(users => {
        res.json({
            data: users,
            success: true,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            data: null,
            success: false,
            msg: err
        })
    })
})

module.exports = router;