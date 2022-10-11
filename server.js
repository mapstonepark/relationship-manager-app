const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')
// const connectDB = require('./config/database')


require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoutes)

app.listen(process.env.PORT, ()=> {
    console.log('My dude your server is running!')
})