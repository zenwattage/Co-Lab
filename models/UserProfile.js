// import Mongoose
const mongoose = require('mongoose');

// Grab the schema constructor method from mongoose
var Schema = mongoose.Schema;

// New Schema Object
var UserProfileSchema = new Schema({
  // the show title will be a string, and a required field
  Username: {
    type: String,
    required: true
  },
});


// Create the model
var UserProfile = mongoose.model('UserProfile', UserProfileSchema);
// Export the model
module.exports = UserProfile;