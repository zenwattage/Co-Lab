var express = require('express');
var router = express.Router();
const passport = require('../passport');

router.post('/signup', (req, res, next) => {

    // Custom Passport Callback
    //passing json back into object
    //first(takes callback) second(takesrequestobject)
    passport.authenticate('local-signup', function(error, user, info) {

      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }

      return res.json(user);
    })(req, res, next);
});

router.post('/signin', function(req, res, next) {
  
  passport.authenticate('local-signin', function(error, user, info) {

      if (error) {
        return res.status(500).json({
          message: error || 'Oops, something happened!',
        });
      }
      
      return res.json(user);
    })(req, res, next);
});

module.exports = router;
