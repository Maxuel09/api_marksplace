import { db } from '../database/conection.js';

export const ProductModel = {
    getallProducts: async () => {
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    },
    getProduct: async (id_product) => {
        const [rows] = await db.query('SELECT * FROM products WHERE id_product = ?', [id_product]);
        return rows[0];
    },
    createProduct: async (req, res) => {
        const { product_name, price, stock, img, description, state } = req.body;
        const [rows] = await db.query('INSERT INTO products (product_name, price, stock, img, description, state) VALUES (?, ?, ?, ?)', [product_name, price, stock, img, description, state]);
        return rows;
    },
    updateProduct: async (req, res) => {
        const { id_product } = req.params;
        const {product_name, price , stock, img, description, state } = req.body;
        const [rows] = await db.query('UPDATE products SET product_name = ?, price = ?, stock = ?,  description = ?, state = ? WHERE id_product = ?', [product_name, price, stock,state,description]);
        return rows;

    },
    deleteProduct: async (req, res) => {
        const { id_product } = req.params;
        const [rows] = await db.query('DELETE FROM products WHERE id_product = ?', [id_product]);
        return rows;
    }
}