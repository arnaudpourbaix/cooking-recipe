import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class IngredientCreate1604221477939 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'INGREDIENT',
        columns: [
          {
            name: 'ID',
            type: 'text',
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
