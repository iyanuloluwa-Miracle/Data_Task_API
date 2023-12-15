const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// Create a new user
router.post('/users', userController.createUser);

// Get user by userId
router.get('/users/:userId', userController.getUser);

// Update user by userId
router.put('/users/:userId', userController.updateUser);

module.exports = router;
