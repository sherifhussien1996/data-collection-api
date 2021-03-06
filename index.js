const express = require('express')
const app = express()

require('dotenv').config()

// config database
require('./api/config/db')
// load models
require('./api/models/shift')
require('./api/models/match')
// seed database
require('./seed')

const shiftRoute = require('./api/routes/shift')
const matchRoute = require('./api/routes/match')

// Middleware
app.use(express.json())

app.use('/api/shift', shiftRoute)
app.use('/api/match', matchRoute)


const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})