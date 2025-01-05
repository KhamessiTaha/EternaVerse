import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Universe } from 'src/universes/universe.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'defaultUser' })
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 'user' }) // New field for roles
  role: string; // Possible values: 'user', 'admin'

  @OneToMany(() => Universe, (universe) => universe.createdBy)
  universes: Universe[]; // A user can create multiple universes
}
