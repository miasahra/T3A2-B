const Feed = require ("../models/feed")

const getAllFeeds = function (req){
    return Feed.find({ username: req.user.username })
}

const addFeed = function(req){
    const date = Date.now()
    req.body.username = req.user.username
    req.body.created_at = date
    req.body.modified_at = date
    return Feed(req.body)
}

const getFeedById = function (id){
    return Feed.findById(id)
}

const deleteFeed = function(id){
    return Feed.findByIdAndRemove(id)
}

const updateFeed = function(req){
    req.body.modified_at = Date.now()
    //new: true will return the updated feed
    return Feed.findByIdAndUpdate(req.params.id, req.body, { new: true })
}

module.exports = { getAllFeeds, addFeed, getFeedById, deleteFeed, updateFeed }

