import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { User } from 'src/users/user.entity';
  
  @Entity()
  export class Universe {
    @PrimaryGeneratedColumn('uuid') // UUID for unique identification
    id: string;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    description: string;
  
    @Column('json', { nullable: true })
    constants: Record<string, any>;
  
    @ManyToOne(() => User, (user) => user.universes, { eager: true })
    createdBy: User; // Reference to the user who created this universe
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  