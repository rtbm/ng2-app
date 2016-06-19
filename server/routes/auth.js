const express = require('express');
const router = express.Router();
const auth = require('./../controllers/auth');

router.post('/signin', auth.signin);
router.post('/signup', auth.signup);
router.post('/change-password', auth.changePassword);
router.post('/reset-password', auth.resetPassword);

module.exports = router;
