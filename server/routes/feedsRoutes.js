const express = require('express')
const router = express.Router()

const {getFeeds, newFeed, getFeed, removeFeed, changeFeed} = require('../controllers/feedsController')
const {loginRequired} = require('../controllers/authController')

router.use(loginRequired)

router.get('/', getFeeds)
router.get('/:id', getFeed)



router.post('/', newFeed)



router.delete('/:id', removeFeed)

router.put('/:id', changeFeed)



module.exports = router