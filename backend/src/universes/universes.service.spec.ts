import { Test, TestingModule } from '@nestjs/testing';
import { UniversesService } from './universes.service';

describe('UniversesService', () => {
  let service: UniversesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversesService],
    }).compile();

    service = module.get<UniversesService>(UniversesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
