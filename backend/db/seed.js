const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DB_FILE || './db/database.sqlite3');


db.serialize(() => {
  // products
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    rating INTEGER,
    type TEXT,        
    imageUrl TEXT
  )`);

  // QuickLinks 
  db.run(`CREATE TABLE IF NOT EXISTS quick_links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    url TEXT
  )`);

  // SliderItems 
  db.run(`CREATE TABLE IF NOT EXISTS slider_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heading TEXT,
    imageUrl TEXT,
    productId INTEGER
  )`);

  // example seed data
const insertProduct = db.prepare(`INSERT INTO products (name, price, rating, type, imageUrl) VALUES (?, ?, ?, ?, ?)`);

for (let i = 1; i <= 10; i++) {
  const type = i <= 3 ? 'special' : 'recommendation';
  insertProduct.run(`Product ${i}`, (i * 150).toFixed(2), Math.ceil(Math.random() * 5), type, `https://picsum.photos/seed/special${i}/300/200`);
}
insertProduct.finalize();

  const insertLink = db.prepare(`INSERT INTO quick_links (title, url) VALUES (?, ?)`);
  for (let i = 1; i <= 8; i++) {
    insertLink.run(`Campaign ${i}`, `/campaign/${i}`);
  }
  insertLink.finalize();

  const insertSlider = db.prepare(`INSERT INTO slider_items (heading, imageUrl, productId) VALUES (?, ?, ?)`);

  for (let i = 1; i <= 10; i++) {
    insertSlider.run(`Kampanya ${i}`, `https://picsum.photos/seed/slider${i}/800/300`, i);
  }

  insertSlider.finalize();

  
  console.log('Seed completed');
  db.close();
});
