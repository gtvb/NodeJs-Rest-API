const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')

const postsRoute = require('./routes/posts')

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } )

app.use('/posts', postsRoute)

app.listen(5000, () => {
    console.log('Started on 5000')
})