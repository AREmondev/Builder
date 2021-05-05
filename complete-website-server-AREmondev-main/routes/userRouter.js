import express from 'express'
import {
  registerNewUser,
  authUser,
  getAllUser,
  updateUser,
} from '../controllers/userController.js'
import { protect, userProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(authUser)
router.route('/allusers').get(protect, userProtect, getAllUser)
router.route('/:id').put(protect, userProtect, updateUser)

router.route('/signup').post(registerNewUser)

export default router
