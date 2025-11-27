const redis = require('redis');

// Просто создаем один клиент
const redisClient = redis.createClient({
  url: 'redis://localhost:6379' // как PostgreSQL:5432
});

// Подключаемся
redisClient.connect().then(() => {
  console.log('✅ Redis connected');
}).catch(err => {
  console.log('❌ Redis error:', err);
});

// Экспортируем один клиент для всего приложения
module.exports = redisClient;