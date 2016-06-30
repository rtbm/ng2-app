const express = require('express');
const router = express.Router();
const invites = require('../controllers/invites');

router.get('/', invites.findAll);

router.post('/', invites.save);
router.delete('/:inviteId', invites.remove);

module.exports = router;