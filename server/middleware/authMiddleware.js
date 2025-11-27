const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Токен не найден' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;

    next();
    
  } catch (error) {
    return res.status(401).json({ message: 'Ошибка аутентификации' });
  }
};

// ВАЖНО: Правильный экспорт
module.exports = authMiddleware;