let mongoose = require("mongoose");
const Users = require('../models/User');
require("dotenv").config({ path: '../routes/.env' });
import {config} from "dotenv"; config()


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
