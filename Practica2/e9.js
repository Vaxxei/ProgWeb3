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

app.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock, categoria_id } = req.body;
  const sql = `
    UPDATE productos
    SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = NOW()
    WHERE id = ?
  `;
  db.query(sql, [nombre, precio, stock, categoria_id, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ mensaje: 'Producto actualizado correctamente' });
  });
});
