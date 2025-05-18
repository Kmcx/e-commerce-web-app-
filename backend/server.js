const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const db = new sqlite3.Database(process.env.DB_FILE || './db/database.sqlite3');

// Products API (with optional type filter)
app.get('/api/products', (req, res) => {
  const { type } = req.query;
  const query = type ? 'SELECT * FROM products WHERE type = ?' : 'SELECT * FROM products';
  const params = type ? [type] : [];

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

// Slider Items API
app.get('/api/slider-items', (req, res) => {
  db.all('SELECT * FROM slider_items', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

// Quick Links API
app.get('/api/quick-links', (req, res) => {
  db.all('SELECT * FROM quick_links', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

// Serve React frontend build
app.use(express.static(path.join(__dirname, './build')));
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, './build/index.html'));
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend working on: http://localhost:${PORT}`);
});
