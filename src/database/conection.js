import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const db = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DDBB,
})

try {
    await db.getConnection();
    console.log('Database connected');
} catch (error) {
    console.log(error);
}