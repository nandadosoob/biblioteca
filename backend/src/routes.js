const express = require('express');
const router = express.Router();
const autorController = require('./controllers/Autor');

router.post('/autor',  autorController.create);
router.get('/autor',  autorController.list);

module.exports = router;