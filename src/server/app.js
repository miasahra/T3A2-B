// Import packages
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

// Import routers
const feedsRouter = require("./routes/feedsRoutes")
const dependantsRouter = require("./routes/dependantsRoutes")
const authRouter = require("./routes/authRoutes")

// Declare express reqs
const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const dbConn = process.env.MONGODB_URI

// Establish connection with MongoDB
mongoose.connect(dbConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  err => {
    if (err) {
      console.log("No database connection", err)
    } else {
      console.log("Connected to the database")
    }
  }
)

// Attach User to every request
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization) {
    jwt.verify(req.headers.authorization, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decode) => {
      if (err) {
        req.user = undefined
      } else {
        req.user = decode
      }
      next()
    })
  } else {
    req.user = undefined
    next()
  }
})

// Declare Routes
app.get("/", (req, res) => {
  res.send("Welcome to Feeding Tracker Backend!")
})

app.use("/feeds", feedsRouter)
app.use("/dependants", dependantsRouter)
app.use("/auth", authRouter)
app.listen(port)