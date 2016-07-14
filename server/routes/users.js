const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.findAll);
router.get('/:userId/profile', users.readProfile);
router.put('/:userId/profile', users.updateProfile);

module.exports = router;
