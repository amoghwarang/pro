const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'astro', // change if different
  database: 'movie', // using the new movie database
  port: 3306 // change this if your MySQL is running on a different port
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL!');
});

module.exports = connection; 