import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsedCars1635376190960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(
      new Table({
        name: 'usedcars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'brand',
            type: 'varchar',
            isNullable: false,
            length: '15',
          },
          {
            name: 'model',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'price',
            type: 'float',
            isNullable: false,
            length: '20',
          },
          {
            name: 'avatar',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usedcars')
  }
}
