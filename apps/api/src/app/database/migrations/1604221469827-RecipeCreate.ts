import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RecipeCreate1604221469827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'RECIPE',
        columns: [
          {
            name: 'ID',
            type: 'number',
            isPrimary: true,
          },
          {
            name: 'TITLE',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'TYPE',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'PREPARATION_TIME',
            type: 'number',
            isNullable: true,
          },
          {
            name: 'COOKING_TIME',
            type: 'number',
            isNullable: true,
          },
          {
            name: 'DESCRIPTION',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'PUBLISHED_AT',
            type: 'date',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
