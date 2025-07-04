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
router.delete('/categoria/:id_categoria', categoriaController.delete)




router.post('/', subcategoriaController.create);       // Criar subcategoria + associar
router.get('/', subcategoriaController.list);          // Listar todas
router.put('/:id_subcategoria', subcategoriaController.update);  // Atualizar
router.delete('/:id_subcategoria', subcategoriaController.remove); // Deletar

module.exports = router;


router.post('/livro', livroController.create);
router.get('/livro', livroController.list);
router.get('/livro/:id_livro', livroController.get);
router.put('/livro/:id_livro', livroController.update);   
router.delete('/livro/:id_livro', livroController.remove);

router.post('/curso', cursoController.create);
router.get('/curso', cursoController.list);
router.get('/curso/:id_curso', cursoController.get);
router.put('/curso/:id_curso', cursoController.update);
router.delete('/curso/:id_curso', cursoController.remove);

module.exports = router;