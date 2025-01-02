import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // 'users' is the name of the table
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
