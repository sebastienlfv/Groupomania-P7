const express = require('express')
const router = express.Router();
const postCtrl = require('../controllers/post')
const auth = require('../middleware/user')
const multer = require('../middleware/mutler-config')

// route Post
router.get('/', auth, postCtrl.readPost)
router.post('/', multer, postCtrl.createPost)
router.put('/:id', auth, multer, postCtrl.updatePost)
router.delete('/:id', auth, postCtrl.deletePost)
router.post('/:id/like', postCtrl.likeSauce)


module.exports = router;