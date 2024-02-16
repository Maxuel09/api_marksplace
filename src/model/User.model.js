import { db } from '../database/conection.js';


export const Usermodel = {

    getallUsers: async () => {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    },

    getUser: async (id_user) => {
        const [rows] = await db.query('SELECT * FROM users WHERE id_user = ?', [id_user]);
        return rows[0];
    },
    
    createUser: async (req, res) => {
        const { name_user, last_name, gmail_user, age_user } = req.body;
        const [rows] = await db.query(`INSERT INTO users (name_user, last_name, gmail_user, age_user) VALUES ('${name_user}', '${last_name}', '${gmail_user}', '${age_user}')`);
        return rows;
        
    },
    
    updateUser: async (req, res) => {
        const { id_user } = req.params;
        const { name_user, last_name, gmail_user, age_user } = req.body;
        const [rows] = await db.query('UPDATE users SET name_user = ?, last_name = ?, gmail_user = ?, age_user = ? WHERE id_user = ?', [name_user, last_name, gmail_user, age_user, id_user]);
        return rows;
    },
    
    deleteUser: async (id_user) => {
        const [rows] = await db.query('DELETE FROM users WHERE id_user = ?', [id_user]);
        return rows;
    }
}