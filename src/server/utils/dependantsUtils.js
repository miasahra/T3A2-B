// Mongoose specific utility methods 
// to be used alongside corresponding Controllers
const Dependant = require("../models/dependant")
const Feed = require("../models/feed")

// Create a new dependant
const addDependant = function (req) {
  req.body.user_id = req.user
  return Dependant(req.body)
}

// Get all Dependants for a User
const getAllDependantsForUser = function (req) {
  return Dependant.find({
    user_id: req.user._id,
  })
}

// Get all feeds for a dependant
const getAllFeedsForDependant = function (req) {
  return Feed.find({
    dependant_id: req.params.id,
  })
}

// Get a specific dependant
const getDependantById = function (id) {
  return Dependant.findById(id)
}

// Delete a specific dependant
const deleteDependant = function (id) {
  return Dependant.findByIdAndRemove(id)
}

// Update a specific dependant
const updateDependant = function (req) {
  // new: true will return the updated dependant
  return Dependant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
}

module.exports = {
  getAllDependantsForUser,
  getAllFeedsForDependant,
  addDependant,
  getDependantById,
  deleteDependant,
  updateDependant,
}