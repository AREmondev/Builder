import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import userRouter from './routes/userRouter.js'
import serviceRouter from './routes/servicesRouter.js'
import orderRoute from './routes/orderRoute.js'
import reviewRoute from './routes/reviewRouter.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8000

app.use('/user', userRouter)
app.use('/services', serviceRouter)
app.use('/order', orderRoute)
app.use('/review', reviewRoute)
app.get('/', (req, res) => {
  res.send('App Running')
})
app.listen(PORT, console.log('app running '))
