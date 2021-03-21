import { Column, Entity, ManyToOne } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Recipe } from './recipe.entity';
import { Unit } from './unit.entity';

@Entity()
export class RecipeIngredient {
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, { primary: true })
  recipe!: Recipe;

  @ManyToOne(() => Ingredient, { primary: true })
  ingredient!: Ingredient;

  @ManyToOne(() => Unit, { primary: true })
  unit!: Unit;

  @Column({ nullable: false })
  quantity!: number;
}
