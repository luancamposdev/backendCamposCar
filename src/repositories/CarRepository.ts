import { Repository, EntityRepository } from 'typeorm'
import Car from '../models/Car'

@EntityRepository(Car)
class CarRepository extends Repository<Car> {}

export default CarRepository
