import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import UserRepository from '../repositories/UserRepository'

class UserController {
  async create(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)

    const { name, username, email, password } = request.body

    const existUser = await userRepository.findOne({ username, email })

    if (existUser) {
      return response.status(400).json({ message: 'Usuário ja existe!' })
    }

    const passwordHashed = await hash(password, 8)

    const user = userRepository.create({
      name,
      username,
      email,
      password: passwordHashed,
    })

    await userRepository.save(user)

    // delete user.password;

    return response.status(201).json(user)
  }

  async show(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)
    const { username } = request.params

    const user = await userRepository.findOne({ username })

    if (!user)
      return response.status(401).json({ error: 'Usuário não existe!' })

    return response.json(user)
  }

  async index(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.find()

    return response.json(user)
  }

  async delete(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)
    const { id } = request.params

    await userRepository.delete(id)

    return response.json({ message: 'Deleted user.' })
  }

  async update(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)
    const { id } = request.params

    const userExist = await userRepository.findOne(id)

    if (!userExist)
      return response.status(400).json({ message: 'User note found!' })

    const user = await userRepository.update(id, request.body)

    if (user.affected) return response.json({ massage: 'Updated user.' })
  }
}

export default new UserController()
