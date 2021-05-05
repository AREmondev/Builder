import Service from '../models/servicesModel.js'
import asyncHandler from 'express-async-handler'

export const makeServices = asyncHandler(async (req, res) => {
  const { name, price, image, description } = req.body

  const service = await Service.create({ name, price, image, description })
  if (service) {
    res.json({
      _id: service._id,
      name: service.name,
      image: service.image,
      price: service.price,
      description: service.description,
      addedBy: req.user.name,
    })
  } else {
    res.json({
      message: 'Service not Added',
    })
  }
})

export const getAllServices = asyncHandler(async (req, res) => {
  const service = await Service.find({})
  res.send(service)
})
export const getServicesById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id)

  res.send(service)
})
export const dltServices = asyncHandler(async (req, res) => {
  const service = await Service.findOneAndRemove(req.params.id)
  res.send(service)
})
