const express = require('express');
const router = express.Router();
const autorController = require('./controllers/Autor');
const locatarioController = require('./controllers/Locatario');
const dividaController = require('./controllers/Divida');
const reservaController = require('./controllers/Reserva');
const categoriaController = require('./controllers/Categoria');
const subcategoriaController = require('./controllers/SubCategoria');
const livroController = require('./controllers/Livro');
// console.log('Controller LIVRO:', livroController);
const cursoController = require('./controllers/Curso')
const editoraController = require('./controllers/Editora');



router.post('/livro', livroController.create);
router.get('/livro', livroController.list);
router.get('/livro/:id_livro', livroController.get);
router.put('/livro/:id_livro', livroController.update);   
router.delete('/livro/:id_livro', livroController.remove);
router.patch('/livro/:id_livro/reativar', livroController.reativar);
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

router.post('/divida',  dividaController.create);
router.get('/divida',  dividaController.list);
router.get('/divida/:id_divida', dividaController.get);
router.put('/divida/:id_divida', dividaController.update);   
router.delete('/divida/:id_divida', dividaController.remove); 

router.post('/reserva',  reservaController.create);
router.get('/reserva',  reservaController.list);
router.get('/reserva/:id_livro/:id_locatario/:data_reserva', reservaController.get);
router.put('/reserva/:id_livro/:id_locatario/:data_reserva/entrega', reservaController.registrarEntrega);  
router.put('/reserva/:id_livro/:id_locatario/:data_reserva', reservaController.update); 
router.delete('/reserva/:id_livro/:id_locatario/:data_reserva', reservaController.remove); 



// router.post('/categoria', categoriaController.create);
// router.get('/categoria', categoriaController.list);
// router.delete('/categoria/:id_categoria', categoriaController.delete)





router.post('/subcategoria', subcategoriaController.create);       
// router.get('/subcategoria', subcategoriaController.list);          
router.put('/subcategoria/:id_subcategoria', subcategoriaController.update);  
router.delete('/subcategoria/:id_subcategoria', subcategoriaController.remove); 

//>>>>>>> c6da8ae6788c715be2d282e448f47ddcedc9cb81




router.post('/curso', cursoController.create);
router.get('/curso', cursoController.list);
router.get('/curso/:id_curso', cursoController.get);
router.put('/curso/:id_curso', cursoController.update);
router.delete('/curso/:id_curso', cursoController.remove);

//>>>>>>> c6da8ae6788c715be2d282e448f47ddcedc9cb81

router.post('/editora', editoraController.create);
router.get('/editora', editoraController.list);
router.get('/editora/:id_editora', editoraController.get);
router.put('/editora/:id_editora', editoraController.update);
router.delete('/editora/:id_editora', editoraController.remove);

module.exports = router;

