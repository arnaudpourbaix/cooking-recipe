import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserCreate1603223280391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'USER',
        columns: [
          {
            name: 'ID',
            type: 'text',
            isPrimary: true,
          },
          {
            name: 'DISPLAY_NAME',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'PHOTO_URL',
            type: 'text',
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
