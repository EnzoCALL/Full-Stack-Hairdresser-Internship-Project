const db = require('../util/database');

module.exports = class Product {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.extra = extra;
    this.price = price;
    this.quantity = quantity;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static post(name, extra, price, quantity) {
    return db.execute(
      'INSERT INTO products (name, extra, price, quantity) VALUES (?, ?, ?, ?)',
    [name, extra, price, quantity]);
  }

  static update(id, name, extra, price, quantity) {
    return db.execute(
      'UPDATE products SET name = ?, extra = ?, price = ?, quantity = ? WHERE id = ?',
    [name, extra, price, quantity, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }
};
