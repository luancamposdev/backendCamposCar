import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('usedcars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  brand: string

  @Column()
  model: string

  @Column()
  price: number

  @Column()
  avatar: string

  @CreateDateColumn()
  created_at: Date
}

export default Car
