const path = require('path');
// const connect = require('connect');
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(MONGODB_URI="mongodb://localhost:27017/soundStream" || process.env.MONGODB_URI,  {
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

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});