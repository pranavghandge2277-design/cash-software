import mysql from 'mysql2/promise'

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Pass@123',
    database: 'cash_management'
})