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
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use('/static', express.static(path.join(__dirname, '../client/build//static')));

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

if (process.env.NODE_ENV === "production") {
    // Send every other request to the React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
} else {
    let proxy = require('express-http-proxy');
    app.use('*', proxy('http://localhost:3000', {
        proxyReqPathResolver: function (req, res) {
            return req.url + req.originalUrl
        }
    }))
}

app.use(routes);

app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
});