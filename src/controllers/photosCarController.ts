import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import path from 'path'

class CarController {
  async show(request: Request, response: Response) {
    const { filename } = request.params
    const options = {
      root: path.resolve(
        __dirname,
        '..',
        '..',
        'public',
        'uploads',
        'photos-cars'
      ),
    }
    response.sendFile(filename, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', filename)
      }
    })
  }
}

export default new CarController()
function next(err: Error) {
  throw new Error('Function not implemented.')
}
