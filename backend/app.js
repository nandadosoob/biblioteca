const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use( '/api',routes);


app.listen(port, () => {
	console.log(`Servidor escutando na porta: ${port}`);
});

app.get('', (req, res) => {
  res.send('Rota raiz sem caminho definido');
});


// const subcategoriaRoutes = require('./routes/subcategoriaRoutes');
// app.use('/subcategorias', subcategoriaRoutes);

