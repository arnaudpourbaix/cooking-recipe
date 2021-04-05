import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeIngredient } from './type-ingredient.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  label!: string;

  @ManyToOne(() => TypeIngredient)
  @JoinColumn({ name: 'type_id' })
  type?: TypeIngredient;
}
