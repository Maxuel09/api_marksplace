import { db } from '../database/conection.js';


export const Rolmodel = {
    getallRol: async () => {
        const [rows] = await db.query('SELECT * FROM rol');
        return rows;
    },

    getRol: async (id_rol) => {
        const [rows] = await db.query('SELECT * FROM rol WHERE id_rol = ?', [id_rol]);
        return rows[0];
    },

    createRol: async (req, res) => {
        const { rol } = req.body;
        const [rows] = await db.query('INSERT INTO rol (rol) VALUES (?)', [rol]);
        return rows;
    },

    updateRol: async (req, res) => {
        const { id_rol } = req.params;
        const { rol } = req.body;
        const [rows] = await db.query('UPDATE rol SET rol = ? WHERE id_rol = ?', [rol, id_rol]);
        return rows;
    },
    
    deleteRol: async (req, res) => {
        const { id_rol } = req.params;
        const [rows] = await db.query('DELETE FROM rol WHERE id_rol = ?', [id_rol]);
        return rows;
    }
}