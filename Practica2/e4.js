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

app.put('/categorias/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  const sql = 'UPDATE categorias SET nombre = ?, descripcion = ?, fecha_act = NOW() WHERE id = ?';
  db.query(sql, [nombre, descripcion, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ mensaje: 'Categoría actualizada correctamente' });
  });
});

