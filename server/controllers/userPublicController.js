const pool = require('../config/postgre');

exports.getUserByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const result = await pool.query('SELECT id, username, avatar, name FROM users WHERE username = $1', [username]);
    
    if (result.rows.length === 0) {
      return res.status(200).json(null); // или { user: null }
    }
    
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT id, username, avatar, name FROM users WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(200).json(null); // или { user: null }
    }
    
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, username, avatar, email } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (name, username, avatar, email) VALUES ($1, $2, $3, $4) RETURNING *', [name, username, avatar, email]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') { // unique_violation
      return res.status(400).json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};