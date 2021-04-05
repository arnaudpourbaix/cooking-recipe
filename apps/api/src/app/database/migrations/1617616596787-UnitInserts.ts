import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Unit } from '../entities/unit.entity';

export class UnitInserts1617616596787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository = getRepository(Unit);
    await repository.save(
      repository.create({ label: 'cuillère à café', notation: 'cc' })
    );
    await repository.save(
      repository.create({ label: 'cuillère à thé', notation: 'ct' })
    );
    await repository.save(
      repository.create({ label: 'cuillère à soupe', notation: 'cs' })
    );
    await repository.save(
      repository.create({ label: 'millitre', notation: 'ml' })
    );
    await repository.save(
      repository.create({ label: 'centilitre', notation: 'dl' })
    );
    await repository.save(
      repository.create({ label: 'décilitre', notation: 'ml' })
    );
    await repository.save(repository.create({ label: 'litre', notation: 'l' }));
    await repository.save(
      repository.create({ label: 'gramme', notation: 'g' })
    );
    await repository.save(
      repository.create({ label: 'kilogramme', notation: 'kg' })
    );
    await repository.save(
      repository.create({ label: 'livre', notation: 'lb' })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
