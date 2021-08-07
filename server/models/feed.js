const mongoose = require("mongoose")

const Schema = mongoose.Schema
const normalize = require("normalize-mongoose")

const Feed = new Schema({
  type: {
    type: String,
    enum: ["BREAST", "BOTTLE"],
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
  feed_duration: {
    type: Number,
    required: true,
    integer: true,
  },
  measurement: {
    type: Number,
    required: false,
    integer: true,
  },
  dependant: {
    type: Schema.Types.ObjectId,
    ref: "Dependant",
  },
  created_at: {
    type: Date,
    required: true,
  },
  modified_at: {
    type: Date,
    required: true,
  },
})

Feed.plugin(normalize)
module.exports = mongoose.model("Feed", Feed)