const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 4005
const USER_ROUTER = require('./routes/user_routes')
const URL_ROUTER = require('./routes/url_routes')
const connectDB = require('./connect')

connectDB("mongodb://127.0.0.1:27017/fs-urlshortner").then(() => console.log("Database Connected"))
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/user',USER_ROUTER)
app.use('/url',URL_ROUTER)


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))