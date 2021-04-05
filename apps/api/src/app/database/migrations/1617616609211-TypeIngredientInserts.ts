import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { TypeIngredient } from '../entities/type-ingredient.entity';

export class TypeIngredientInserts1617616609211 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository = getRepository(TypeIngredient);
    await repository.save(repository.create({ id: 1, label: 'Légume' }));
    await repository.save(repository.create({ id: 2, label: 'Fruit' }));
    await repository.save(repository.create({ id: 3, label: 'Légumineuse' }));
    await repository.save(repository.create({ id: 4, label: 'Céréale' }));
    await repository.save(repository.create({ id: 5, label: 'Oléagineux' }));
    await repository.save(repository.create({ id: 6, label: 'Epice' }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
