import { SeasonDto } from './season.dto';
import { TypeIngredientDto } from './type-ingredient.dto';

export interface IngredientDto {
  id: number;
  label: string;
  type: TypeIngredientDto;
  seasons: SeasonDto[];
}
