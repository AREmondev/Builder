import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDB = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      console.log('Connected'),
    )
  } catch {
    console.log('Db Not Connected')
  }
}

export default connectDB
