import { IngredientFindParams } from '@cooking-recipe/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Ingredient } from '../database/entities/ingredient.entity';
import { TypeIngredient } from '../database/entities/type-ingredient.entity';
import { FindConditions, ObjectLiteral } from 'typeorm';
import { Like } from 'typeorm';
import { Season } from '../database/entities/season.entity';
import { TypeIngredientCreate1617615336758 } from '../database/migrations/1617615336758-TypeIngredientCreate';
@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
    @InjectRepository(TypeIngredient)
    private readonly typeIngredientRepository: Repository<TypeIngredient>,
    @InjectRepository(Season)
    private readonly seasonRepository: Repository<Season>
  ) {}

  find(params: IngredientFindParams): Promise<Ingredient[]> {
    const query = getManager()
      .createQueryBuilder(Ingredient, 'ingredient')
      .innerJoinAndSelect('ingredient.type', 'type')
      .leftJoinAndSelect('ingredient.seasons', 'season');
    if (params.typeId) {
      query.where('ingredient.type = :type', { type: params.typeId });
    }
    if (params.seasonId) {
      query.where('season.id = :seasonId', {
        seasonId: params.seasonId,
      });
    }
    if (params.searchText) {
      query.where('ingredient.label like :label', {
        label: Like(`%${params.searchText}%`),
      });
    }
    return query.getMany();
  }

  getTypes(): Promise<TypeIngredient[]> {
    return this.typeIngredientRepository.find({ order: { label: 'ASC' } });
  }

  getSeasons(): Promise<Season[]> {
    return this.seasonRepository.find({ order: { label: 'ASC' } });
  }
}
