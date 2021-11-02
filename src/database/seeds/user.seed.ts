import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '../../models/User'
import { hash } from 'bcryptjs'

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          name: 'admin',
          username: 'admin',
          email: 'admin@camposcar.com.br',
          password: await hash('123456', 8),
        },
      ])
      .execute()
  }
}
