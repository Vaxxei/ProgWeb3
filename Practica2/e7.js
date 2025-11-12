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

app.get('/productos', (req, res) => {
  const sql = `
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    JOIN categorias c ON p.categoria_id = c.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});
