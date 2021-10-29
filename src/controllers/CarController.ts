import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import CarRepository from '../repositories/CarRepository'

class CarController {
  async create(request: Request, response: Response) {
    const carRepository = getCustomRepository(CarRepository)

    const { name, marca, modelo, price, avatar } = request.body

    console.log(avatar)

    const car = carRepository.create({
      name,
      marca,
      modelo,
      price,
      avatar,
    })

    // await carRepository.save(car)

    // delete user.password;

    return response.status(201).json(car)
  }
}

export default new CarController()
