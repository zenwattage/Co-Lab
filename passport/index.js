const passport = require('passport');
const User = require('..models/user');

//add user into passport as a session
passport.serializeUser(function (user, done) {
    done(null, user.email);
  });
  
  passport.deserializeUser(function (email, done) {
    User.findOne({ email }).exec((err, user) => {
        done(err, user); //req.user made available
      });
  });

  
const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;