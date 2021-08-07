const Dependant = require ("../models/dependant")

const getAllDependants = function (req){
    return Dependant.find({ username: req.user.username })
}

const addDependant = function(req){
    const date = Date.now()
    req.body.username = req.user.username
    req.body.created_at = date
    req.body.modified_at = date
    return Dependant(req.body)
}

const getDependantById = function (id){
    return Dependant.findById(id)
}

const deleteDependant = function(id){
    return Dependant.findByIdAndRemove(id)
}

const updateDependant = function(req){
    req.body.modified_at = Date.now()
    //new: true will return the updated dependant
    return Dependant.findByIdAndUpdate(req.params.id, req.body, { new: true })
}

module.exports = { getAllDependants, addDependant, getDependantById, deleteDependant, updateDependant }

