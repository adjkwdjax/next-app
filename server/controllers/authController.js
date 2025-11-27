const pool = require('../config/postgre');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const { getIO } = require('../config/socketio');
const io = getIO();

io.on('Hello', (socket) => {
    console.log('World!' + socket)
})

exports.authUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT id, password FROM users WHERE username=$1', [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'неверные данные' });
    }

    const user = result.rows[0];

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log(isPasswordCorrect);

    if (isPasswordCorrect) {
        const token = jwt.sign(
            {  'userId': user.id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        )
        res.status(200).json({
            userId: user.id,
            token: token
        });
    } else {
        return res.status(401).json({ error: 'неверный пароль' });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 2)

        const result = await pool.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, hashedPassword, email]
        );
        
        res.status(201).json({
            message: 'Пользователь успешно создан',
            user: result.rows[0]
        });
    } catch (error) {
        if (error.code === '23505') { // Ошибка уникальности
            return res.status(400).json({ 
                error: 'Пользователь с таким username или email уже существует' 
            });
        }
        
        res.status(500).json({ 
            error: 'Ошибка при создании пользователя' 
        });
    }
};