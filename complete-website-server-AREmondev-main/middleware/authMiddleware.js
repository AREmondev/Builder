import jwt from 'jsonwebtoken'
import User from '../models/userModels.js'
import dotenv from 'dotenv'
dotenv.config()
export const protect = async (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decode.id).select('-password')
    } catch (error) {
      res.status(404)
    }
  }
  next()
}

export const userProtect = async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    try {
      next()
    } catch (error) {
      res.json({
        message: 'Only Admin Can See This',
      })
    }
  }
}
