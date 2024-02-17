import { db } from '../database/conection.js';

export const Categorymodel = {
    getallCategory: async () => {
        const [rows] = await db.query('SELECT * FROM category_products');
        return rows;
    },
    getCategory: async (id_category) => {
        const [rows] = await db.query('SELECT * FROM category_products WHERE id_category = ?', [id_category]);
        return rows[0];
    },

    createCategory: async (req, res) => {
        const { category_name } = req.body;
        const [rows] = await db.query('INSERT INTO category_products (category_name) VALUES (?)', [category_name]);
        return rows;
    },

    updateCategory: async (req, res) => {
        const { id_category } = req.params;
        const { category_name } = req.body;
        const [rows] = await db.query('UPDATE category_products SET category_name = ? WHERE id_category = ?', [category_name, id_category]);
        return rows;
    },

    deleteCategory: async (req, res) => {
        const { id_category } = req.params;
        const [rows] = await db.query('DELETE FROM category_products WHERE id_category = ?', [id_category]);
        return rows;
    }
}