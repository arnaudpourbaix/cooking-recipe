import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeIngredient } from '../database/entities/recipe-ingredient.entity';
import { Recipe } from '../database/entities/recipe.entity';
import { Season } from '../database/entities/season.entity';
import { TypeIngredient } from '../database/entities/type-ingredient.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(TypeIngredient)
    private readonly repository: Repository<Season>
  ) {}
}
