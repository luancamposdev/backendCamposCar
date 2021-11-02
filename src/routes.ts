import { Router } from 'express'
const multer = require('multer')

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import CarController from './controllers/CarController'

import { is } from './middlewares/permission'
import { multerConfig } from './config/multerConfig'
import photosCarController from './controllers/photosCarController'

const router = Router()

// User Route
router.get('/users', UserController.index)
router.get('/users/:username', UserController.show)
router.post('/users', UserController.create)
router.delete('/users/:id', UserController.delete)
router.put('/users/:id', UserController.update)

// Car Route
router.post(
  '/cars',
  multer(multerConfig).single('avatar'),
  CarController.create
)
router.put(
  '/cars/:id',
  multer(multerConfig).single('avatar'),
  CarController.update
)
router.get('/cars/:id', CarController.show)
router.get('/cars', CarController.index)
router.delete('/cars/:id', CarController.delete)

// Photos Car Route
router.get('/cars/photos/:filename', photosCarController.show)

// Session Route
router.post('/sessions', SessionController.create)

// router.get('/seed', "")

export { router }
