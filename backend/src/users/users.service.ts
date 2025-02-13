import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Fetch all users
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Fetch a user by ID
  async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Create a new user
  async create(email: string, username: string, password: string, role: string = 'user'): Promise<User> {
    const newUser = this.userRepository.create({ email, username, password, role });
    return this.userRepository.save(newUser);
  }

  // Update an existing user
  async update(id: string, updates: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updates);
    return this.userRepository.findOne({ where: { id } });
  }

  // Delete a user
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
