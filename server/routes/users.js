const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.findAll);

module.exports = router;
