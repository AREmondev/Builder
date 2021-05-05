import Order from '../models/orderModels.js'
import asyncHandler from 'express-async-handler'

export const addOrderService = asyncHandler(async (req, res) => {
  const { orderItems, status, paymentMethod, totalPrice, isPaid } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
  } else {
    const order = new Order({
      user: req.user,
      status,
      orderItems,
      paymentMethod,
      totalPrice,
      isPaid,
    })
    const createdOrder = await order.save()
    res.send(createdOrder)
  }
})
export const getOrderService = asyncHandler(async (req, res) => {
  const allOrderService = await Order.find({})
  res.send(allOrderService)
})
export const getUserOrderService = asyncHandler(async (req, res) => {
  const allOrderService = await Order.find({ user: req.user })
  res.send(allOrderService)
})
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const findingOrder = Order.findById(req.params.id)
  const status = req.body.status
  const updatedOrder = await findingOrder.updateOne({ status })
  res.send(updatedOrder)
})
