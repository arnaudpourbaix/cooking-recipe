import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RecipeIngredient1617615492791 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'recipe_ingredient',
        columns: [
          {
            name: 'recipe_id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'ingredient_id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'unit_id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['recipe_id'],
            referencedTableName: 'recipe',
            referencedColumnNames: ['id'],
          },
          {
            columnNames: ['ingredient_id'],
            referencedTableName: 'ingredient',
            referencedColumnNames: ['id'],
          },
          {
            columnNames: ['unit_id'],
            referencedTableName: 'unit',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
