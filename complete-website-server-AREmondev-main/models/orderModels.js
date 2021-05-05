import mongoose from 'mongoose'
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        description: {
          required: true,
          type: String,
        },
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: { type: Date },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_id: { type: String },
    },
  },
  { timestamp: true },
)

const Order = mongoose.model('Order', orderSchema)
export default Order
