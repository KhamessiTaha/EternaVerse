import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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
}
