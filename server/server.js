'use strict'

// Imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config')

let categoriesRoutes = require('./routes/categories')
let comicsRoutes = require('./routes/comics')

// Setup
let apiServer = express()
apiServer.set('APP_SECRET', config.secret)

// MongoDB (mongoose)
mongoose.connect(config.databaseUrl)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

// Enable CORS
apiServer.use(cors())

// Body Parser
apiServer.use(bodyParser.urlencoded({extended: false}))
apiServer.use(bodyParser.json())

// Cookie Parser
apiServer.use(cookieParser())

// Routes
apiServer.use(categoriesRoutes)
apiServer.use(comicsRoutes)

// Export
module.exports = apiServer