const {
  getAllDependants,
  addDependant,
  getDependantById,
  deleteDependant,
  updateDependant,
} = require("../utils/dependantsUtils")

const getDependants = function (req, res) {
  getAllDependants(req).exec((err, dependants) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message,
      })
    }
    res.send(dependants)
  })
}

const getDependant = function (req, res) {
  getDependantById(req.params.id).exec((err, dependant) => {
    if (err) {
      res.status(404)
      return res.json({
        error: err.message,
      })
    }
    res.send(dependant)
  })
}

const newDependant = function (req, res) {
  addDependant(req).save((err, dependant) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message,
      })
    }
    res.send(dependant)
  })
}

const removeDependant = function (req, res) {
  deleteDependant(req.params.id).exec((err) => {
    if (err) {
      res.status(404)
      return res.json({
        error: err.message,
      })
    }
    res.sendStatus(204)
  })
}

const changeDependant = function (req, res) {
  updateDependant(req).exec((err, dependant) => {
    if (err) {
      res.status(404)
      return res.json({
        error: err.message,
      })
    }
    res.status(200)
    res.send(dependant)
  })
}

module.exports = {
  getDependants,
  newDependant,
  getDependant,
  removeDependant,
  changeDependant,
}