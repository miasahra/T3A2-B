const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// Import models
const User = require("../models/user")

// Define Sign Up controller associated to Route
const signUp = function (req, res) {
  const newUser = new User(req.body)
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
  newUser.save((err, user) => {
    if (err) {
      res.status(400)
      return res.json({
        error: err.message,
      })
    }

    return res.json({
      username: user.username,
      jwt: jwt.sign({
        username: user.username,
        email: user.email,
        _id: user._id,
      }, process.env.JWT_ACCESS_TOKEN_SECRET),
    })
  })
}

// Define Sign In controller associated to Route
const signIn = function (req, res) {
  User.findOne({
    email: req.body.email,
  }, (err, user) => {
    if (err) {
      res.status(400)
      return res.json({
        error: err.message,
      })
    }

    if (!user || !user.comparePassword(req.body.password)) {
      res.status(400)
      return res.json({
        message: "Authentication failed",
      })
    }
    return res.json({
      username: user.username,
      jwt: jwt.sign({
        username: user.username,
        email: user.email,
        _id: user._id,
      }, process.env.JWT_ACCESS_TOKEN_SECRET),
    })
  })
}

// Checks if user is authenticated
const loginRequired = function (req, res, next) {
  if (req.user) {
    next()
  } else {
    return res.status(401).json({
      message: "Unauthorized operation",
    })
  }
}

module.exports = {
  signUp,
  signIn,
  loginRequired,
}