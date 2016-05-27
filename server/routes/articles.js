const express = require('express');
const router = express.Router();
const articles = require('../controllers/articles');
const jwt = require('express-jwt');
const config = require('../config/config');

router.get('/', articles.findAll);

router.post('/', jwt({ secret: config.secret }), articles.save);
router.get('/:articleId', articles.read);
router.put('/:articleId', jwt({ secret: config.secret }), articles.update); // TODO: Update action
router.delete('/:articleId', jwt({ secret: config.secret }), articles.remove); // TODO: Remove action

module.exports = router;
