import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { IngredientEntity } from './entities/ingredient.entity';

@EntityRepository(IngredientEntity)
export class IngredientRepository extends Repository<IngredientEntity> {
  private readonly logger = new Logger('IngredientRepository');
}
