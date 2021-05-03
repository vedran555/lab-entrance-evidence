const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const port = 3000;

const app = express();

mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Could NOT connect to database: ' + err);
    }
    else {
        console.log('Connected to database: ' + config.uri);
    }
});

app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start listening to th eport
app.listen(port, () => {
    console.log('server started on port: ', port);
})
