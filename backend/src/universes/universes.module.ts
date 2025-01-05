import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Universe } from './universe.entity';
import { UniversesService } from './universes.service';
import { UniversesController } from './universes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Universe])], 
  providers: [UniversesService],
  controllers: [UniversesController],
  exports: [UniversesService], 
})
export class UniversesModule {}
