const router = require('express').Router();

const UserController = require('../controllers/userControllers');
const PhotoController = require('../controllers/photoControllers')
const authentication = require('../middlewares/authentication');
const userAuthorize = require('../middlewares/userAuthorize');
const photoAuthorize = require('../middlewares/photoAutorize');

router.post('/users/register', UserController.registerUser);
router.post('/users/login', UserController.loginUser);

router.use(authentication);

router.use('/users/:userId', userAuthorize);
router.put('/users/:userId', UserController.editUser);
router.delete('/users/:userId', UserController.deleteUser);

router.post('/photos', PhotoController.createPhotos);
router.get('/photos', PhotoController.getAllPhotos);

router.use('/photos/:photoId', photoAuthorize);
router.put('/photos/:photoId', PhotoController.updatePhotobyId);
router.delete('/photos/:photoId', PhotoController.deletePhotobyId);


module.exports = router