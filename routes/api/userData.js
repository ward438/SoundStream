const router = require('express').Router();
const Users = require('../../models/User');
const mongoose = require('mongoose');


router.put('/add-artist', ({ body }, res) => {
    console.log(body)
    Users.findByIdAndUpdate(
        { _id: body._id },
        {$push: { favoriteArtists: [body.artistId] }},       
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log(result)
                res.send(result);
            }
        }
    )   
})



// router.get('/', async (req, res) => {

// });

// router.get('/', async (req, res) => {


// });


// router.put('/:id', async (req, res) => {

// })



module.exports = router;