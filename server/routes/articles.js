const express = require('express');
const router = express.Router();
const articles = require('../controllers/articles');

router.get('/', articles.findAll);

router.post('/', articles.save);
router.get('/:articleId', articles.read);
router.put('/:articleId', articles.update);
router.delete('/:articleId', articles.remove);

module.exports = router;
