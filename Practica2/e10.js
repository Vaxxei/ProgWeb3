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

app.patch('/productos/:id/stock', (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body; // puede ser positiva o negativa
  const sql = 'UPDATE productos SET stock = stock + ?, fecha_act = NOW() WHERE id = ?';
  db.query(sql, [cantidad, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ mensaje: 'Stock actualizado correctamente' });
  });
});
