const express = require("express");
const app = express();
const mongoose = require("mongoose");

const db = require('./config/keys').mongoURI;

// set up mongo database
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('You did it!'))
    .catch(err => console.log(err))

// vvv server creation down below vvv
app.get('/', (req, res) => res.send("App is now alive!"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server breathing on port ${port}`))