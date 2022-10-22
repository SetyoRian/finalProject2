const router = require('express').Router();

const UserController = require('../controllers/userControllers');
const PhotoController = require('../controllers/photoControllers')
const authentication = require('../middlewares/authentication');
const userAuthorize = require('../middlewares/userAuthorize');

router.post('/users/register', UserController.registerUser);
router.post('/users/login', UserController.loginUser);

router.use(authentication);

router.use('/users/:userId', userAuthorize);
router.put('/users/:userId', UserController.editUser);

router.post('/photos', PhotoController.createPhotos);
router.get('/photos', PhotoController.getAllPhotos);

module.exports = router