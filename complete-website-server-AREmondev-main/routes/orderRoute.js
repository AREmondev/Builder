import express from 'express'
import {
  addOrderService,
  getOrderService,
  getUserOrderService,
  updateOrderStatus,
} from '../controllers/orderController.js'

import { protect, userProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderService)
router.route('/').get(protect, userProtect, getOrderService)
router.route('/:id').put(protect, userProtect, updateOrderStatus)
router.route('/ownorder').get(protect, getUserOrderService)

export default router
