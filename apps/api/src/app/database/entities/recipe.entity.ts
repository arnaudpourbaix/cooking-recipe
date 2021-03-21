import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecipeIngredient } from './recipe-ingredient.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  type!: string;

  //   @Column({ type: 'int', nullable: true })
  //   preparationTime: number | undefined;

  //   @Column({ type: 'int', nullable: true })
  //   cookingTime: number | undefined;

  @Column({ type: 'text', nullable: false })
  description!: string;

  @Column({ type: 'datetime', nullable: false })
  publishedAt!: Date;

  @OneToMany(() => RecipeIngredient, (ingredient) => ingredient.recipe, {
    cascade: true,
  })
  ingredients!: RecipeIngredient[];
}
