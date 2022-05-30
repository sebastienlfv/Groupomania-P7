const express = require('express');
const router = express.Router();
const roleCtrl = require('../controllers/role')

// role
router.get('/', roleCtrl.AllRoles)
router.post('/', roleCtrl.CreateRole)
router.delete('/:id', roleCtrl.DeleteRole)


module.exports = router;