const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoutes = require('./routes/user')
const questionRoutes = require('./routes/question')
const answerRoutes = require('./routes/answer')
const mongoose = require('mongoose')
const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

app.use("/answer", answerRoutes)
app.use("/user", userRoutes)
app.use("/question", questionRoutes)

mongoose.
  connect(process.env.MONGO_URL)
  .then(result => {
    console.log("running boiss")
    app.listen(4000)
  })
  .catch(err => {
    console.log(err)
  })