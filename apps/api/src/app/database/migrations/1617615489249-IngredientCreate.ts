import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class IngredientCreate1617615489249 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ingredient',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'label',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'type_id',
            type: 'integer',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['type_id'],
            referencedTableName: 'type-ingredient',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
