import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SeasonIngredientCreate1619938240065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'season_ingredient',
        columns: [
          {
            name: 'season_id',
            type: 'string',
            isPrimary: true,
          },
          {
            name: 'ingredient_id',
            type: 'integer',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['season_id'],
            referencedTableName: 'season',
            referencedColumnNames: ['id'],
          },
          {
            columnNames: ['ingredient_id'],
            referencedTableName: 'ingredient',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
