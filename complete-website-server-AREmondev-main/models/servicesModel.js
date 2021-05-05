import mongoose from 'mongoose'
const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Service = mongoose.model('Service', serviceSchema)
export default Service
