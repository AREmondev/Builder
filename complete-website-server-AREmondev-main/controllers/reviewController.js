import Review from '../models/reviewModel.js'
import asyncHandler from 'express-async-handler'

export const addReview = asyncHandler(async (req, res) => {
  const { description, email, name } = req.body

  try {
    const review = new Review({
      user: req.user,
      name: req.user.name,
      description: description,
      email: req.user.email,
    })
    const createdReview = await review.save()
    res.send(createdReview)
  } catch (error) {
    res.send(error)
  }
})

export const getReview = asyncHandler(async (req, res) => {
  const allReview = await Review.find({})
  res.send(allReview)
})
