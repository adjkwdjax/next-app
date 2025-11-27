const pool = require('../config/postgre');


exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, username, avatar } = req.body;
  try {
    const result = await pool.query('UPDATE users SET name = $1, username = $2, avatar = $3 WHERE id = $4 RETURNING *', [name, username, avatar, id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};