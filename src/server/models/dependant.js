const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Define Dependant Schema
const Dependant = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  // Associate with Feed schema
  // A dependant can have many feeds
  feeds: [{
    type: Schema.Types.ObjectId,
    ref: "Feed", 
  }],
  // Associate with User schema
  // A dependant can have a singular User
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true })

module.exports = mongoose.model("Dependant", Dependant)