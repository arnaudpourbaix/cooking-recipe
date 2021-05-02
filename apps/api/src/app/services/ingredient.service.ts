import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from '../database/entities/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly repository: Repository<Ingredient>
  ) {}

  find(): Promise<Ingredient[]> {
    return this.repository.find({ relations: ['type', 'seasons'] });
  }
}
