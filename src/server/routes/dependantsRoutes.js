const express = require("express")

const router = express.Router()

// Import controller methods
const { getDependantsForUser, getFeedsForDependant, newDependant, getDependant, removeDependant, changeDependant } = require("../controllers/dependantsController")
const { loginRequired } = require("../controllers/authController")

// Attach routes to express router
router.use(loginRequired)
router.get("/", getDependantsForUser)
router.get("/:id/feeds", getFeedsForDependant)
router.get("/:id", getDependant)
router.post("/", newDependant)
router.delete("/:id", removeDependant)
router.put("/:id", changeDependant)

module.exports = router