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
  marca: string

  @Column()
  modelo: string

  @Column()
  price: number

  @Column()
  avatar: string

  @CreateDateColumn()
  created_at: Date
}

export default Car
