require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

// public
app.set('views', path.join(__dirname, 'views'))
// view engine
app.set('view engine', 'ejs')

// Connect to mongoose
const URI = process.env.MONGODB_URL

mongoose.connect(URI, (err) => {
	if (err) throw err
	console.log('Connected to mongodb')
})

// Routes
app.use('/', require('./routes/indexRouter'))
app.use('/token', require('./routes/tokenRouter'))

app.use((req, res, next) => {
	next(createError(404))
})
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({
		message: err.message,
	})
})

const PORT = process.env.PORT || 5015

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`)
})
