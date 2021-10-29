import { Router } from 'express'
const multer = require('multer')

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import PermissionController from './controllers/PermissionController'
import RoleController from './controllers/RoleController'
import CarController from './controllers/CarController'

import { is } from './middlewares/permission'
import { multerConfig } from './config/multerConfig'

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

// Session Route
router.post('/sessions', SessionController.create)

// Permission Route
router.post('/permissions', PermissionController.create)

// Role Route
router.post('/roles', RoleController.create)

export { router }
