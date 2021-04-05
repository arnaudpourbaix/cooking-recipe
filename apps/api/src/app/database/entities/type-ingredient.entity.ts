import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'type-ingredient' })
export class TypeIngredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  label!: string;
}
