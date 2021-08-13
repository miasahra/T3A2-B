const mongoose = require("mongoose")

const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

// Define User schema
const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  // Associate a User with Dependant schema
  // A User has many Dependants
  dependants: [{
    type: Schema.Types.ObjectId,
    ref: "Dependant", 
  }],
}, { timestamps: true })

// Verify input password against hashed database password
User.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model("User", User)