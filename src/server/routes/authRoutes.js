const express = require("express")

const router = express.Router()

// Import controller methods
const { signUp, signIn } = require("../controllers/authController")

// Attach routes to express router
router.post("/sign_up", signUp)
router.post("/sign_in", signIn)

module.exports = router