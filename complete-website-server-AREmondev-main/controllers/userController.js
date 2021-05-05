import User from '../models/userModels.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utills/generateToken.js'
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const passwordMatch = await user.matchPassword(password)
  if (user && passwordMatch) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  }
})
export const registerNewUser = async (req, res) => {
  const { name, email, password } = req.body
  const userHave = await User.findOne({ email })

  if (userHave) {
    res.json({
      message: 'User Already Exist',
    })
  } else {
    const user = await User.create({ name, email, password })
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

        token: generateToken(user._id),
      })
    } else {
      res.json({
        message: 'Register Failed',
      })
    }
  }
}
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (error) {
    res.json({
      message: 'User Not Found',
    })
  }
}

export const updateUser = asyncHandler(async (req, res) => {
  const findingUser = User.findById(req.params.id)
  const roll = req.body.isAdmin
  const updatedUser = await findingUser.updateOne({ isAdmin: roll })
  res.send(updatedUser)
})
