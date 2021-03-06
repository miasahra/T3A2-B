const mongoose = require("mongoose")

const Schema = mongoose.Schema
const normalize = require("normalize-mongoose")

// Define Feed Schema
const Feed = new Schema({
  type: {
    type: String,
    enum: ["BREAST", "BOTTLE"], // can only be one of
    required: true,
  },
  left_breast_duration: {
    type: Number,
    required: false,
    integer: true,
  },
  right_breast_duration: {
    type: Number,
    required: false,
    integer: true,
  },
  bottle_duration: {
    type: Number,
    required: false,
    integer: true,
  },
  total_duration: {
    type: Number,
    required: true,
    integer: true,
  },
  measurement: {
    type: Number,
    required: false,
    integer: true,
  },
  // Associate with Dependant schema
  // A Feed belongs to a singular Dependant
  dependant_id: {
    type: Schema.Types.ObjectId,
    ref: "Dependant",
  },
  dependant_name: {
    type: String,
    required: true,
  },
  // Associate a feed with User schema
  // A Feed belongs to a Dependant which belongs to a User
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true })

Feed.plugin(normalize)
module.exports = mongoose.model("Feed", Feed)