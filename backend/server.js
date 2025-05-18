const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const sqlite3 = require('sqlite3');

const app = express();
app.use(cors()); // ✅ Tüm origin'lere CORS izni ver

app.use(express.json());

// API routes
const db = new sqlite3.Database(process.env.DB_FILE || './db/database.sqlite3');

app.get('/api/products', (req, res) => {
  const { type } = req.query;
  const query = type
    ? 'SELECT * FROM products WHERE type = ?'
    : 'SELECT * FROM products';
  const params = type ? [type] : [];

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.get('/api/slider-items', (req, res) => {
  db.all('SELECT * FROM slider_items', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.get('/api/quick-links', (req, res) => {
  db.all('SELECT * FROM quick_links', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

// React frontend build klasörünü sun
app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, './build/index.html'));
  }
});

// Server başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend working on: http://localhost:${PORT}`);
});
