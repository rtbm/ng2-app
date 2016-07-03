const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.findAll);
router.post('/follow', users.follow);

module.exports = router;
