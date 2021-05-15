import { IngredientDto } from './ingredient.dto';
import { RecipeDto } from './recipe.dto';
import { UnitDto } from './unit.dto';

export interface RecipeIngredientDto {
  recipe: RecipeDto;
  ingredient: IngredientDto;
  unit: UnitDto;
  quantity: number;
}
