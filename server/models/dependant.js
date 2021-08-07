const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Dependant = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  feeds: [{
    type: Schema.Types.ObjectId,
    ref: "Feed", 
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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

module.exports = mongoose.model("Dependant", Dependant)