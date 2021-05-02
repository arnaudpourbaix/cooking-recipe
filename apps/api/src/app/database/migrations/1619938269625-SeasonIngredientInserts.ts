import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeasonIngredientInserts1619938269625
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 1; i <= 42; i++) {
      queryRunner.query(`insert into season_ingredient values("winter", ${i})`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
