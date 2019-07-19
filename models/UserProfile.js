// import Mongoose
const mongoose = require('mongoose');

// Grab the schema constructor method from mongoose
var Schema = mongoose.Schema;

// Associate user to Profession to Medium to Traits



// New Schema Object
var UserProfileSchema = new Schema({

    Username: {
    type: String,
    required: true
  },
    Username: {
    type: String,
    required: true
  },
  Male: {
    type: Boolean,
    required: true
  },
  Female: {
    type: Boolean,
    required: true
  },
  Dancer: {
    type: Boolean,
    required: true
  },
  Ballet: {
    type: Boolean,
    required: true
  },
  HipHop: {
    type: Boolean,
    required: true
  },
  Contemporary: {
    type: Boolean,
    required: true
  },
  Latin: {
    type: Boolean,
    required: true
  },
  Photographer: {
    type: Boolean,
    required: true
  },
  Landscape: {
    type: Boolean,
    required: true
  },
  Portrait: {
    type: Boolean,
    required: true
  },
  Street: {
    type: Boolean,
    required: true
  },
  Motion: {
    type: Boolean,
    required: true
  },



});


// Create the model
var UserProfile = mongoose.model('UserProfile', UserProfileSchema);
// Export the model
module.exports = UserProfile;