// routes/auth.js
const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

const authMiddleware = require('../middleware/authMiddleware');

// routes /api/auth
router.post('/login', authController.authUser);
router.post('/register', authController.registerUser);
router.get('/check', authMiddleware, (req, res, next) => { // ← ПЕРЕМЕСТИТЕ ВЫШЕ
  res.json({ isAuthorized: true, userId: req.user.userId});
});

module.exports = router;