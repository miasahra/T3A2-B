const express = require("express")

const router = express.Router()

const { getDependants, addDependant, getDependant, removeDependant, changeDependant } = require("../controllers/dependantsController")
const { loginRequired } = require("../controllers/authController")

router.use(loginRequired)
router.get("/", getDependants)
router.get("/:id", getDependant)
router.post("/", addDependant)
router.delete("/:id", removeDependant)
router.put("/:id", changeDependant)

module.exports = router