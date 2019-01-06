const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const account = require('./routes/api/Account');
const goals = require('./routes/api/Goals');
const users = require('./routes/api/User');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.user(bodyParser.json());

const db = require('./config/Keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/Passport')(passport);

app.use('/api/accounts', account);
app.use('/api/goals', goals);
app.use('/api/users', users);

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server is working on port ${Port}.`));