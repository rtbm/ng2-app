const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.findAll);

router.post('/:userId/follow', users.follow);
router.delete('/:userId/follow', users.unfollow);

router.get('/:userId', users.read);
router.put('/:userId', users.update);

module.exports = router;
