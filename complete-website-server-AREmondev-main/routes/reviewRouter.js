import express from 'express'
import { addReview, getReview } from '../controllers/reviewController.js'

import { protect, userProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/addreview').post(protect, addReview)
router.route('/').get(getReview)

export default router
