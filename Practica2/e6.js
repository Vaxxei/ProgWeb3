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

app.post('/productos', (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body;
  const sql = 'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, precio, stock, categoria_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, nombre, precio, stock, categoria_id });
  });
});
