import express from 'express'
import {
  makeServices,
  getAllServices,
  getServicesById,
  dltServices,
} from '../controllers/serviceController.js'
import { protect, userProtect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/addService').post(protect, userProtect, makeServices)
router.route('/').get(getAllServices)
router.route('/:id').delete(dltServices)
router.route('/:id').get(getServicesById)

export default router
