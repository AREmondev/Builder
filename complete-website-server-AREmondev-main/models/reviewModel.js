import mongoose from 'mongoose'
const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
  },
  { timestamp: true },
)

const Review = mongoose.model('Review', reviewSchema)
export default Review
