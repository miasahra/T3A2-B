const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const cardsRouter = require('./routes/cardsRoutes') 
const authRouter = require('./routes/authRoutes') 
const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const dbConn = process.env.MONGODB_URI

mongoose.connect(dbConn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    err => {
        if (err){
            console.log("No database connection", err)
        } else {
            console.log("Connected to the database")
        }
    }
)

app.use((req, res, next) => {

    if(req.headers && req.headers.authorization){
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY,(err, decode)=>{
            if (err) {
                req.user = undefined
            }else{
                req.user = decode
            }
            next()
        })
    }else{
        req.user = undefined
        next()
    }
})

app.get("/", (req, res) => {
    res.send("Hello world!")
    })

app.use("/cards", cardsRouter)
app.use("/auth", authRouter)
app.listen(port, ()=>{console.log(`Trello clone server is running on port ${port}`)})



