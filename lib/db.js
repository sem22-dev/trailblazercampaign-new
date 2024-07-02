// lib/db.js
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Koireng@1',
    database: 'mydatabase'
});

export default connection;
