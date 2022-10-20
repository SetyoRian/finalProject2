const router = require('express').Router();

const UserController = require('../controllers/userControllers');

router.post('/users/register', UserController.registerUser);

module.exports = router