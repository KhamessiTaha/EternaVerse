import { Test, TestingModule } from '@nestjs/testing';
import { UniversesController } from './universes.controller';

describe('UniversesController', () => {
  let controller: UniversesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversesController],
    }).compile();

    controller = module.get<UniversesController>(UniversesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
