let mongoose = require("mongoose");
// const Workout = require('../models/workouts');
require("dotenv").config({ path: '../.env' });
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
