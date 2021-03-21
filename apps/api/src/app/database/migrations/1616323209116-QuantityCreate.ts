import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class QuantityCreate1616323209116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'QUANTITY',
        columns: [
          {
            name: 'ID',
            type: 'number',
            isPrimary: true,
          },
          {
            name: 'LABEL',
            type: 'text',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
