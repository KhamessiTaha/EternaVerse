import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Universe } from './universe.entity';

@Injectable()
export class UniversesService {
  constructor(
    @InjectRepository(Universe)
    private readonly universeRepository: Repository<Universe>,
  ) {}

  async create(universeData: Partial<Universe>, userId: string): Promise<Universe> {
    const newUniverse = this.universeRepository.create({
      ...universeData,
      createdBy: { id: userId }, // Link the user
    });
    return this.universeRepository.save(newUniverse);
  }

  async findAll(): Promise<Universe[]> {
    return this.universeRepository.find();
  }

  async findOne(id: string): Promise<Universe> {
    return this.universeRepository.findOne({ where: { id } });
  }

  async update(id: string, updateData: Partial<Universe>, userId: string): Promise<Universe> {
    const universe = await this.universeRepository.findOne({ where: { id } });

    if (universe.createdBy.id !== userId) {
      throw new Error('Unauthorized');
    }

    Object.assign(universe, updateData);
    return this.universeRepository.save(universe);
  }

  async remove(id: string, userId: string): Promise<void> {
    const universe = await this.universeRepository.findOne({ where: { id } });

    if (universe.createdBy.id !== userId) {
      throw new Error('Unauthorized');
    }

    await this.universeRepository.remove(universe);
  }
}
