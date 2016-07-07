const express = require('express');
const router = express.Router();
const profiles = require('../controllers/profiles');

router.get('/:userId', profiles.read);
router.put('/:userId', profiles.update);

module.exports = router;
