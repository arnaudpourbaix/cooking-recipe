import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'USER' })
export class UserEntity {
  @PrimaryColumn({ name: 'ID' })
  id!: string;

  @Column({ name: 'DISPLAY_NAME', nullable: false })
  displayName!: string;

  @Column({ name: 'PHOTO_URL', nullable: false })
  photoUrl!: string;
}
