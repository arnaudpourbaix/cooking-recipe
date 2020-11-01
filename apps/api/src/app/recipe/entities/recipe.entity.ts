import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'RECIPE' })
export class RecipeEntity {
  @PrimaryColumn({ name: 'ID' })
  id!: number;

  @Column({ name: 'TITLE', nullable: false })
  title!: string;

  @Column({ name: 'TYPE', nullable: false })
  type!: string;

  @Column({ name: 'PREPARATION_TIME', type: 'number', nullable: true })
  preparationTime: number | undefined;

  @Column({ name: 'COOKING_TIME', type: 'number', nullable: true })
  cookingTime: number | undefined;

  @Column({ name: 'DESCRIPTION', type: 'text', nullable: false })
  description!: string;

  @Column({ name: 'PUBLISHED_AT', type: 'datetime', nullable: false })
  publishedAt!: Date;
}
