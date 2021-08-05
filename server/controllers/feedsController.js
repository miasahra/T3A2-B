const {
  getAllFeeds,
  addFeed,
  getFeedById,
  deleteFeed,
  updateFeed
} = require('../utils/feedsUtils')

const getFeeds = function (req, res) {
  getAllFeeds(req).exec((err, feeds) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    res.send(feeds)
  })
}

const getFeed = function (req, res) {
  getFeedById(req.params.id).exec((err, feed) => {
    if (err) {
      res.status(404)
      return res.json({
        error: err.message
      })
    }
    res.send(feed)
  })
}

const newFeed = function (req, res) {
  addFeed(req).save((err, feed) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    res.send(feed)
  })
}

const removeFeed = function (req, res) {
  deleteFeed(req.params.id).exec((err) => {
    if (err) {
      res.status(404)
      return res.json({
        error: err.message
      })
    }
    res.sendStatus(204)
  })
}

const changeFeed = function (req, res) {
  updateFeed(req).exec((err, feed) => {
    if (err) {
      res.status(404)
      return res.json({
        error: err.message
      })
    }
    res.status(200)
    res.send(feed)
  })
}

module.exports = {
  getFeeds,
  newFeed,
  getFeed,
  removeFeed,
  changeFeed
}