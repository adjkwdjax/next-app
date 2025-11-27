const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http'); // ✅ Добавляем http
const pool = require('./config/postgre');
const redis = require('redis');

const redisClient = require('./config/redis');
const { Server } = require('socket.io');
const { initializeSocket } = require('./config/socketio');

const app = express();
const server = http.createServer(app); // ✅ Создаем HTTP сервер

const io = initializeSocket(server);

app.use(express.json());
app.use(cookieParser()); 

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Тестирование БД
pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`);
  console.log(`Socket.IO available on the same port`);
});