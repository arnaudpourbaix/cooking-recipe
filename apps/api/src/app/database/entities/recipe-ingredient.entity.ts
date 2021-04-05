import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Recipe } from './recipe.entity';
import { Unit } from './unit.entity';

@Entity({ name: 'recipe_ingredient' })
export class RecipeIngredient {
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, { primary: true })
  @JoinColumn({ name: 'recipe_id' })
  recipe!: Recipe;

  @ManyToOne(() => Ingredient, { primary: true })
  @JoinColumn({ name: 'ingredient_id' })
  ingredient!: Ingredient;

  @ManyToOne(() => Unit, { primary: true })
  @JoinColumn({ name: 'unit_id' })
  unit!: Unit;

  @Column({ nullable: false })
  quantity!: number;
}
