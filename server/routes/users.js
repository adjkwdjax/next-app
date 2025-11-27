// routes/users.js
const express = require('express');
const router = express.Router();

const userPrivateController = require('../controllers/userPrivateController');
const userPublicController = require('../controllers/userPublicController');
const authController = require('../controllers/authController');
const { getIO } = require('../config/socketio');

const io = { getIO }

const authMiddleware = require('../middleware/authMiddleware');

io.on('Hello', () => {
    console.log("World!")
});

// routes /api/users
router.get('/getUserByUsername/:username', userPublicController.getUserByUsername);
router.get('/getUserById/:id', userPublicController.getUserById);
router.post('/createUser', userPublicController.createUser);
router.put('/updateUserInfo/:id', userPrivateController.updateUser);

module.exports = router;