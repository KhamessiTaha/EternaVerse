import { Injectable , NotFoundException , ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , Like } from 'typeorm';
import { Universe } from './universe.entity';
import { UpdateUniverseDto } from './dto/update-universe.dto';

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
  
  async findByUser(userId: string): Promise<Universe[]> {
    return this.universeRepository.find({
      where: { createdBy: { id: userId } },
      relations: ['createdBy'],
    });
  }

  async findByIdAndUser(universeId: string, userId: string): Promise<Universe> {
    const universe = await this.universeRepository.findOne({
      where: { id: universeId, createdBy: { id: userId } },
      relations: ['createdBy'], // Include user info if needed
    });
  
    if (!universe) {
      throw new NotFoundException('Universe not found or not accessible');
    }
  
    return universe;
  }

  async findAll(
    userId: string,
    options: { page: number; limit: number; name?: string },
  ): Promise<{ data: Universe[]; total: number }> {
    const { page, limit, name } = options;
  
    // Construct the query conditions
    const whereConditions: any = { createdBy: { id: userId } };
    if (name) {
      whereConditions.name = Like(`%${name}%`);
    }
  
    // Use pagination
    const [data, total] = await this.universeRepository.findAndCount({
      where: whereConditions,
      relations: ['createdBy'], // Include user info if needed
      take: limit,
      skip: (page - 1) * limit,
    });
  
    return { data, total };
  }

  async findOne(id: string): Promise<Universe> {
    return this.universeRepository.findOne({ where: { id } });
  }

  async update(
    userId: string,
    universeId: string,
    updateUniverseDto: UpdateUniverseDto,
  ): Promise<Universe> {
    // Find the universe
    const universe = await this.universeRepository.findOne({
      where: { id: universeId },
      relations: ['createdBy'],
    });
  
    if (!universe) {
      throw new NotFoundException('Universe not found');
    }
  
    // Ensure the logged-in user is the creator
    if (universe.createdBy.id !== userId) {
      throw new ForbiddenException('You do not have permission to update this universe');
    }
  
    // Update the universe
    Object.assign(universe, updateUniverseDto);
    return this.universeRepository.save(universe);
  }

  async delete(userId: string, universeId: string): Promise<{ message: string }> {
    // Find the universe
    const universe = await this.universeRepository.findOne({
      where: { id: universeId },
      relations: ['createdBy'],
    });
  
    if (!universe) {
      throw new NotFoundException('Universe not found');
    }
  
    // Ensure the logged-in user is the creator
    if (universe.createdBy.id !== userId) {
      throw new ForbiddenException('You do not have permission to delete this universe');
    }
  
    // Delete the universe
    await this.universeRepository.remove(universe);
    return { message: 'Universe deleted successfully' };
  }
}
