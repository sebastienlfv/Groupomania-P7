const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const userCtrl = require('../controllers/user')

// authentification
router.post('/signup', authCtrl.signup);
router.post('/signin', authCtrl.signin);
router.get('/logout', authCtrl.logout)

// user db
router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.userInfo)
router.delete('/:id', userCtrl.deleteUser)


module.exports = router;