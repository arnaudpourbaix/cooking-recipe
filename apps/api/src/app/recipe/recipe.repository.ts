import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { RecipeEntity } from './entities/recipe.entity';

@EntityRepository(RecipeEntity)
export class RecipeRepository extends Repository<RecipeEntity> {
  private readonly logger = new Logger('RecipeRepository');
}
