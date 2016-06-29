const express = require('express');
const router = express.Router();
const app = require('../controllers/app');

router.get('/csp-violation-report', app.cspViolationReport);
