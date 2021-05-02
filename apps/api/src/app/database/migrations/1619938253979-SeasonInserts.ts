import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeasonInserts1619938253979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('insert into season values("winter", "Hiver")');
    queryRunner.query('insert into season values("spring", "Printemps")');
    queryRunner.query('insert into season values("summer", "Été")');
    queryRunner.query('insert into season values("automn", "Automne")');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
