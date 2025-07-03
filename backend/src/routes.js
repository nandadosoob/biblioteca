const express = require('express');
const router = express.Router();
const autorController = require('./controllers/Autor');
const locatarioController = require('./controllers/Locatario');
const categoriaController = require('./controllers/Categoria');
const subcategoriaController = require('./controllers/SubCategoria');
const livroController = require('./controllers/Livro')

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


router.post('/categoria', categoriaController.create);
router.get('/categoria', categoriaController.list);



router.post('/SubCategoria', subcategoriaController.create);       // Criar subcategoria + associar
router.get('/SubCategoria', subcategoriaController.list);          // Listar todas
router.put('/SubCategoria/:id_subcategoria', subcategoriaController.update);  // Atualizar
router.delete('/SubCategoria/:id_subcategoria', subcategoriaController.remove); // Deletar

router.post('/livro', livroController.create);
router.get('/livro', livroController.list);
router.get('/livro/:id_livro', livroController.get);
router.put('/livro/:id_livro', livroController.update);   
router.delete('/livro/:id_livro', livroController.remove);


module.exports = router;