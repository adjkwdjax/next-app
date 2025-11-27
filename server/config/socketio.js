const { Server } = require('socket.io');

let io = null;

// Функция инициализации (вызывается ОДИН раз в server.js)
const initializeSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "http://localhost:5173" }
  });
  
  // Настройка обработчиков
  io.on('connection', (socket) => {
    console.log('User connected1:', socket.id);
  });
  
  return io;
};

// Функция получения io (для использования в роутах)
const getIO = () => {
  if (!io) {
    throw new Error('Socket.io не инициализирован.');
  }
  return io;
};

module.exports = { initializeSocket, getIO };