const router = require('express').Router();
const Users = require('../../models/User');
const mongoose = require('mongoose');


router.put('/add-artist', ({ body }, res) => {
    console.log(body)
    Users.findByIdAndUpdate(
        { _id: body._id },
        { $push: { favoriteArtists: [body.artistId] } },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log(result)
                res.send(result);
            }
        }
    )
})



router.get('/', async (req, res) => {
    Users.find({ "_id": '60e8a7a23c2a9a18acebe544' }).then((users) => {
        if (users.length > 0){
            res.send(users[0]);
        }
        res.send(null)
        
    });
});



module.exports = router;