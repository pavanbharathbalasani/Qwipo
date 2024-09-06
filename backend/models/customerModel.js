const db = require('../config/db');

// Create customer table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    phone TEXT,
    email TEXT,
    address TEXT
)`);

module.exports = db;
