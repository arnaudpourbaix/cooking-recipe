import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryColumn()
  id!: string;

  @Column({ nullable: false })
  label!: string;
}
