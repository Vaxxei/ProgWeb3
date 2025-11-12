const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'tiendadb'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));

app.get('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const sqlCat = 'SELECT * FROM categorias WHERE id = ?';
  const sqlProd = 'SELECT * FROM productos WHERE categoria_id = ?';

  db.query(sqlCat, [id], (err, categoria) => {
    if (err) return res.status(500).send(err);
    if (categoria.length === 0) return res.status(404).send({ mensaje: 'Categoría no encontrada' });

    db.query(sqlProd, [id], (err, productos) => {
      if (err) return res.status(500).send(err);
      res.send({ ...categoria[0], productos });
    });
  });
});
