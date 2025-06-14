const modelAutor = require('../models/Autor');



async function create(req, res){
    if (!req.body.nome_autor || req.body.nome_autor.trim() === ''){
        res.status(400).json({error: 'Obrigatorio: Nome do autor, campo nome_autor'});
	    return;
    }
    try {
        await modelAutor.create(req.body.nome_autor);
        res.status(201).json({message:'ok'});
	    return;
    } catch( error ){
        console.error('erro na função create do autor',error.message);
        res.status(500).json({error: 'Erro ao criar autor'});
	    return;
    } 
    
};

async function list(req, res){
    try{
        let autores = await modelAutor.list();
	    res.status(200).json({autores:autores});
	    return;
    } catch( error ){
        res.status(500).json({error: 'Erro no list do autor'});
	    return;
    }
};

async function get(req, res) {
    const id_autor = req.params.id_autor;
    try {
        const autor = await modelAutor.get(id_autor);
        if (!autor) {
            res.status(404).json({ error: 'Autor não encontrado' });
            return;
        }
        res.status(200).json({ autor });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar autor' });
    }
}

async function update(req, res) {
  const id_autor = req.params.id_autor;
  const { nome_autor } = req.body;

  if (!nome_autor || nome_autor.trim() === '') {
    return res.status(400).json({ error: 'Nome do autor obrigatório' });
  }

  try {
    const updatedCount = await modelAutor.update(id_autor, nome_autor);

    if (updatedCount === 1) {
      return res.status(200).json({ message: 'Autor atualizado com sucesso' });
    } else {
      return res.status(404).json({ error: 'Autor não encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar autor' });
  }
}

async function remove(req, res) {
    const id_autor = req.params.id_autor; 
    try {
        await modelAutor.remove(id_autor);
        res.status(204).send(); 
    } catch (error) {
        console.error('Erro ao remover autor:', error.message);
        res.status(500).json({ error: 'Erro ao remover autor' });
    }
}


module.exports = { create, list, get, update, remove };
