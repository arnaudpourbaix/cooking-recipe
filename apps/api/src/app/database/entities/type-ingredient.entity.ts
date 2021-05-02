import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'type_ingredient' })
export class TypeIngredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  label!: string;
}
