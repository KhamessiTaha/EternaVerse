import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class UniverseGateway {
  @WebSocketServer()
  server: Server; 

  @SubscribeMessage('joinUniverse')
  handleJoinUniverse(
    @MessageBody() universeId: string, 
    @ConnectedSocket() client: Socket, 
  ) {
    client.join(`universe-${universeId}`); 
    return { message: `Joined universe ${universeId}` };
  }

  // Handle client leaving a universe
  @SubscribeMessage('leaveUniverse')
  handleLeaveUniverse(
    @MessageBody() universeId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.leave(`universe-${universeId}`); 
    return { message: `Left universe ${universeId}` };
  }

  sendUniverseUpdate(universeId: string, update: any) {
    this.server.to(`universe-${universeId}`).emit('universeUpdate', update);
  }
}
