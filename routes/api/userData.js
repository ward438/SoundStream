const router = require('express').Router();
const Users = require('../../models/User');
const mongoose = require('mongoose');
const { request } = require("express");
const cors = require("cors");
// import axios from 'axios';





router.post('/register', async (req, res) => {
    const new_user = new Users({
        username: req.username
    })
    new_user.password = new_user.generateHash(userInfo.password);
    new_user.save();
});

router.post('/login', async (req, res) => {   
    console.log(req.body) 
    Users.findOne({ username: req.body.username }, function (err, users) {
        console.log(err)
        console.log(users)

        if (!users.validPassword(req.body.password)) {
            //password did not match
            console.log('fail')
        } else {
            // password matched. proceed forward
            console.log('match')
        }
        
    });
});




router.get('/', async (req, res) => {

});

router.get('/', async (req, res) => {


});


router.put('/:id', async (req, res) => {
})



module.exports = router;