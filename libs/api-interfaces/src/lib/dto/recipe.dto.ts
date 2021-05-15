import { RecipeIngredientDto } from './recipe-ingredient.dto';

export interface RecipeDto {
  id: number;
  title: string;
  type: string;
  preparationTime: number | undefined;
  cookingTime: number | undefined;
  description: string;
  publishedAt: Date;
  ingredients: RecipeIngredientDto[];
}
