
// High-Level Requirements
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('./passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 8080;
const log = console.log;
const app = express();


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
  Male: true,
  Female: false,
  Dancer: false,
  Ballet: false,
  HipHop: false,
  Contemporary: false,
  Latin: false,
  Photographer: true,
  Landscape: false,
  Portrait: false,
  Street: true,
  Motion: false,
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
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);

app.use(passport.initialize());
//app.use(passport.session());


app.listen(PORT, () =>
  log(`Server listening on PORT ${PORT}`));


module.exports = app;


