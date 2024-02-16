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
}