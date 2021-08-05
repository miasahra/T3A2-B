const mongoose = require("mongoose")
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const Feed = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    required: true
  },
  modified_at: {
    type: Date,
    required: true
  }
})
Feed.plugin(normalize)
module.exports = mongoose.model("Feed", Feed)