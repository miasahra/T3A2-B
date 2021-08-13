const express = require("express")

const router = express.Router()

// Import controller methods
const { getFeeds, getFeedsForUser, newFeed, getFeed, removeFeed, changeFeed } = require("../controllers/feedsController")
const { loginRequired } = require("../controllers/authController")

// Attach routes to express router
router.use(loginRequired)
router.get("/", getFeeds)
router.get("/me", getFeedsForUser)
router.get("/:id", getFeed)
router.post("/", newFeed)
router.delete("/:id", removeFeed)
router.put("/:id", changeFeed)

module.exports = router