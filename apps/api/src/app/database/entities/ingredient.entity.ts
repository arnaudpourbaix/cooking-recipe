import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Season } from './season.entity';
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

  @ManyToMany(() => Season)
  @JoinTable({
    name: 'season_ingredient',
    joinColumn: { name: 'ingredient_id' },
    inverseJoinColumn: { name: 'season_id' },
  })
  seasons!: Season[];
}
