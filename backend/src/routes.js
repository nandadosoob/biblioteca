const express = require('express');
const router = express.Router();
const autorController = require('./controllers/Autor');
const locatarioController = require('./controllers/Locatario');

router.post('/autor',  autorController.create);
router.get('/autor',  autorController.list);
router.get('/autor/:id_autor', autorController.get);
router.put('/autor/:id_autor', autorController.update);   
router.delete('/autor/:id_autor', autorController.remove); 

router.post('/locatario',  locatarioController.create);
router.get('/locatario',  locatarioController.list);
router.get('/locatario/:id_locatario', locatarioController.get);
router.put('/locatario/:id_locatario', locatarioController.update);   
router.delete('/locatario/:id_locatario', locatarioController.remove); 


module.exports = router;