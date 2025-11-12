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

app.post('/categorias', (req, res) => {
  const { nombre, descripcion } = req.body;
  const sql = 'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)';
  db.query(sql, [nombre, descripcion], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, nombre, descripcion });
  });
});
