import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Universe } from './universe.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Universe, (universe) => universe.user)
  universes: Universe[];
}
