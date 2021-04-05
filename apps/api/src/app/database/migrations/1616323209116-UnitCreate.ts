import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UnitCreate1616323209116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'unit',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'label',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'notation',
            type: 'text',
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
