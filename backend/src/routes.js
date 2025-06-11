const express = require('express');
const router = express.Router();
const autorController = require('./controllers/Autor');

router.post('/autor',  autorController.create);
router.get('/autor',  autorController.list);
router.get('/autor/:id_autor', autorController.get);
router.put('/autor/:id_autor', autorController.update);   
router.delete('/autor/:id_autor', autorController.remove); 


module.exports = router;