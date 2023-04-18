require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const moduleRoutes = require('./routes/module')


// express app
const app = express()

// using middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/module',moduleRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
        app.listen (process.env.PORT, () => {
        console.log('Connected on Database and Listening on port',process.env.PORT)
    })
    })
    .catch((err) => {
        console.log(err)
    })



