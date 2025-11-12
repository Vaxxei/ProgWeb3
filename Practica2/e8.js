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

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = ?
  `;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send({ mensaje: 'Producto no encontrado' });
    res.send(result[0]);
  });
});
