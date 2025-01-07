import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Backend WebSocket URL

export const joinUniverse = (universeId) => {
  socket.emit('joinUniverse', universeId, (response) => {
    console.log(response.message); // Server response
  });
};

export const leaveUniverse = (universeId) => {
  socket.emit('leaveUniverse', universeId, (response) => {
    console.log(response.message); // Server response
  });
};

export const listenToUniverseUpdates = (callback) => {
  socket.on('universeUpdate', (data) => {
    callback(data); // Handle updates from the backend
  });
};

export const disconnectSocket = () => {
  socket.disconnect();
};

export default socket;
