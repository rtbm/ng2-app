const express = require('express');
const router = express.Router();
const quotes = require('../controllers/quotes');

router.get('/', quotes.findAll);

router.post('/', quotes.save);
router.get('/:quoteId', quotes.read);
router.put('/:quoteId', quotes.update);
router.delete('/:quoteId', quotes.remove);

module.exports = router;
