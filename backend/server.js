require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(process.env.DB_FILE);

app.use(cors());
app.use(express.json());

// GET /api/products?type=slider|campaign|special|recommendation
app.get('/api/products', (req, res) => {
  const { type } = req.query;
  let sql = 'SELECT * FROM products';
  const params = [];
  if (type) {
    sql += ' WHERE type = ?';
    params.push(type);
  }
  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'No product found' });
    res.json(row);
  });
});

// GET /api/quick-links
app.get('/api/quick-links', (req, res) => {
  db.all('SELECT * FROM quick_links', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET /api/slider-items
app.get('/api/slider-items', (req, res) => {
  db.all('SELECT * FROM slider_items', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend working on: http://localhost:${PORT}`);
});
