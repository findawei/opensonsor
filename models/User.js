const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateThirty = new Date();
dateThirty.setDate(dateThirty.getDate() + 30);

// Create Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    about: {
      type: String,
    },
    interests: {
      type: String,
    },
    dob: {
      type: Date,
    },
    location: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    team: {
      type: String,
    },
    sport: {
      type: Array,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strictQuery: false }
);

module.exports = User = mongoose.model("users", UserSchema);
