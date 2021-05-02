import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SeasonCreate1619938222520 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'season',
        columns: [
          {
            name: 'id',
            type: 'sring',
            isPrimary: true,
          },
          {
            name: 'label',
            type: 'text',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
