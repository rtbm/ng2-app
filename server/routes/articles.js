const express = require('express');
const router = express.Router();
const articles = require('../controllers/articles');
const jwt = require('express-jwt');
const config = require('../config/config');

router.get('/', articles.findAll);

router.post('/', jwt({ secret: config.secret }), articles.save);
router.get('/:articleId', articles.read);
router.put('/:articleId', jwt({ secret: config.secret }), articles.update);
router.delete('/:articleId', jwt({ secret: config.secret }), articles.remove);

module.exports = router;
