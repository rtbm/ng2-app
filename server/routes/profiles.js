const express = require('express');
const router = express.Router();
const profiles = require('../controllers/profiles');

router.get('/:userId', profiles.getProfile);
router.put('/:userId', profiles.updateProfile);

module.exports = router;
