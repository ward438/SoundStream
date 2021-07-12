const path = require('path');
const { passport } = require('./auth');
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
const session = require('express-session');
const app = express();
var cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001;
const FileStore = require('session-file-store')(session);
const Users = require("./models/User");


dotenv.config();
app.use(cookieParser());
// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new FileStore,
    // cookie: {maxAge: 3000000, secure: false, httpOnly: true}
    store: new FileStore({ path: path.join(__dirname, 'sessions') }),
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(MONGODB_URI = "mongodb://localhost:27017/soundStream" || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connection Successful'))
    .catch((err) => {
        console.error(err);
    });
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);
// db.test.find({"_id" : ObjectId("4ecc05e55dd98a436ddcc47c")})
// creates user in lue of authentication stuff
// todo - User create hardcoded uuid from frontend if it doesn't exist
const userId = '60e8a7a23c2a9a18acebe544';
Users.find({ "_id": userId }).then((users) => {
    if (users.length == 0) {
        Users.create({ _id: '60e8a7a23c2a9a18acebe544' })
    }
});


app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
});