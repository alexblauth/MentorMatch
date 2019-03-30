/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var profileSchema = new Schema({
  ID: {
    type: String,
    required: true
  },
  name:{
    type:String
  },
  ethnicity:{
    type:String
  },
  ethScore: {
    type:Number
  },
  gender: {
    type:String
  },
  genScore: {
    type:Number
  },
  industry:{
    type:String
  },
  indScore:{
    type:Number
  },
  bio:String,
  isMentor:Boolean,
  mentorStrengths:{
    type:String
  },
  strScore:{
    type:Number
  },
  isMentee:Boolean,
  menteeGoals:{
    type:String
  },
  goaScore:{
    type:Number
  },
  language:{
    type:String
  },
  lanScore:{
    type:Number
  },
  location:{
    country:{
      type:String
    },
    state:{
      type:String
    },
    city:{
      type:String
    },
  },
  locScore:{
    type:Number
  },

  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
profileSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Profile = mongoose.model('Profile', profileSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Profile;
