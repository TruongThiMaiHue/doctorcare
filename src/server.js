import express from 'express'
import viewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
import connectDB from './config/connectDB'
require('dotenv').config()

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

viewEngine(app)
initWebRoutes(app)
connectDB()

let port = process.env.PORT
app.listen(port, () => {
    console.log('server is running')
})