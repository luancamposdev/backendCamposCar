import { Router } from 'express'
const multer = require('multer')

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import PermissionController from './controllers/PermissionController'
import RoleController from './controllers/RoleController'
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
  is(['ROLE_ADMIN']),
  multer(multerConfig).single('avatar'),
  CarController.create
)
router.put(
  '/cars/:id',
  is(['ROLE_ADMIN']),
  multer(multerConfig).single('avatar'),
  CarController.update
)
router.get('/cars/:id', is(['ROLE_ADMIN', 'ROLE_USER']), CarController.show)
router.get('/cars', is(['ROLE_ADMIN', 'ROLE_USER']), CarController.index)
router.delete('/cars/:id', is(['ROLE_ADMIN']), CarController.delete)

// Photos Car Route
router.get(
  '/cars/photos/:filename',
  is(['ROLE_ADMIN', 'ROLE_USER']),
  photosCarController.show
)

// Session Route
router.post('/sessions', SessionController.create)

// Permission Route
router.post('/permissions', PermissionController.create)

// Role Route
router.post('/roles', RoleController.create)

export { router }
