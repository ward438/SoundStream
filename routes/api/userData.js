const router = require('express').Router();
const Users = require('../../models/User');
const mongoose = require('mongoose');
const { request } = require("express");
const { requireLogin } = require('../../auth');
const { db } = require('../../models/User');


// const cors = require("cors");




router.post('/add-artist', ({ body }, res) => {
    // res.json({ message: 'testing success' })
    Users.create(body)    
                                            //  
        .then((artistId) => Users.findOneAndUpdate({}, { $push: { Users: artistId } }, { new: true }))
        .then(artistId => {
            res.json(artistId)
        })

        .catch(err => {
            res.status(400).json(err)
        })


    // Users.create(req)
    //     .then(({ _id }) => db.Users.findOneAndUpdate({}, { $push: { artistId: _id } }, { new: true }))
    //     .then(dbUsers => {
    //         res.json(dbUsers);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     })

    // const artistId = new Users({ artistId: req.body.artistId })
    // artistId.save((err, res) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(res)
    //     }
    // });
})



// router.post('/register', async (req, res) => {
//     const new_user = new Users({
//         username: req.username
//     })
//     new_user.password = new_user.generateHash(userInfo.password);
//     new_user.save();
// });

// router.post('/login', requireLogin, async (req, res) => {
//     console.log(req.body)

//     // todo - implement passport for authentication
//     Users.create({
//         username: req.body.username
//     }, function (err, users) {


//         console.log(err)
//         console.log(users)

//         if (!users.validPassword(req.body.password)) {
//             //password did not match
//             console.log('fail')
//         } else {
//             // password matched. proceed forward
//             console.log('match')
//         }

//     });
// });



// app.post("/submit", ({body}, res) => {
//     db.Book.create(body)
//       .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//       .then(dbLibrary => {
//         res.json(dbLibrary);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });


router.get('/', async (req, res) => {

});

router.get('/', async (req, res) => {


});


router.put('/:id', async (req, res) => {

})



module.exports = router;