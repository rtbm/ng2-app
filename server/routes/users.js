const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.findAll);
router.get('/:userId', users.read);
router.put('/:userId', users.update);

module.exports = router;
