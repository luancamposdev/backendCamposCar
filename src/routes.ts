import { Router } from 'express'
const multer = require('multer')

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import CarController from './controllers/CarController'

import { multerConfig } from './config/multerConfig'
import photosCarController from './controllers/photosCarController'
import { auth } from './middlewares/authMiddleware'

const router = Router()

// User Route
router.get('/users', UserController.index)
router.get('/users/:username', UserController.show)
router.post('/users', auth, UserController.create)
router.delete('/users/:id', auth, UserController.delete)
router.put('/users/:id', auth, UserController.update)

// Car Route
router.post(
  '/cars',
  auth,
  multer(multerConfig).single('avatar'),
  CarController.create
)
router.put(
  '/cars/:id',
  auth,
  multer(multerConfig).single('avatar'),
  CarController.update
)
router.get('/cars/:id', CarController.show)
router.get('/cars', CarController.index)
router.delete('/cars/:id', auth, CarController.delete)

// Photos Car Route
router.get('/cars/photos/:filename', photosCarController.show)

// Session Route
router.post('/sessions', SessionController.create)

// router.get('/seed', "")

export { router }
