const router = require('express').Router();
const userApi = require('./api/userData');

router.use('/api/userData', userApi);


module.exports = router;