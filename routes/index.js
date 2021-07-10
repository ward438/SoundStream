const router = require('express').Router();
const userApi = require('./api/userData');
const path = require('path');

router.use('/api/userData', userApi);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;