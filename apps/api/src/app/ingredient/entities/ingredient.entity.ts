import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'INGREDIENT' })
export class IngredientEntity {
  @PrimaryColumn({ name: 'ID' })
  id!: number;

  @Column({ name: 'LABEL', nullable: false })
  label!: string;
}
