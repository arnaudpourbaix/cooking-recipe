import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Ingredient } from '../entities/ingredient.entity';

export class IngredientInserts1617616621272 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('insert into ingredient values(1, "Tomate", 1)');
    // const repository = getRepository(Ingredient);
    // await repository.save(repository.create({ label: 'Tomate', type:  }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
