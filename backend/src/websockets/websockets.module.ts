import { Module } from '@nestjs/common';
import { UniverseGateway } from './universe.gateway';

@Module({
  providers: [UniverseGateway], // Add the gateway here
})
export class WebSocketsModule {}
