
// High-Level Requirements
const express = require('express');
const passport = require('./passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 8080;
const log = console.log;
const app = express();
const cookieSession = require('cookie-session');

// MONGO_DB IMPORTS

const mongoose = require('mongoose');
const logger = require('morgan');
const axios = require('axios')
const path = require('path');

// DOTENV - Obsfucates sensitive information
require('dotenv').config()



// END MONGO_DB IMPORTS


// Require our db models
var db = require('./models');

db.UserProfile.create({
  Username: 'Russ',
  password: '1234',
  email: 'russ@russ.russ',
  gender: 'Male',
  bio: 'cool guy',
  instagram: 'ihateinstagram',
  linkedin: 'russdermody',


  

})



mongoose.connect('mongodb://localhost/CoLab_DB', { useNewUrlParser: true });

// Mongo Config
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/CoLab_DB';
// Connect to Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


//app.set('PORT', process.env.PORT || 8080);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(passport.initialize());
//add coookie to browser
app.use(passport.session());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);


app.listen(PORT, () =>
  log(`Server listening on PORT ${PORT}`));


module.exports = app;


