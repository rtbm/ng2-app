const express = require('express');
const router = express.Router();
const circles = require('../controllers/circles');

router.get('/', circles.findAll);
router.post('/', circles.save);

router.post('/:circleId/users', circles.saveUser);
router.delete('/:circleId/users/:userId', circles.removeUser);

router.get('/:circleId', circles.read);
router.put('/:circleId', circles.update);
router.delete('/:circleId', circles.remove);

module.exports = router;
