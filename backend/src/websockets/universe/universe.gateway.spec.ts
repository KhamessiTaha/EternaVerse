import { Test, TestingModule } from '@nestjs/testing';
import { UniverseGateway } from './universe.gateway';

describe('UniverseGateway', () => {
  let gateway: UniverseGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniverseGateway],
    }).compile();

    gateway = module.get<UniverseGateway>(UniverseGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
