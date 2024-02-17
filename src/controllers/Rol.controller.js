import { Rolmodel } from "../model/Rol.model.js";

export const RolController = {
    getallRol: async (req, res) => {
        try {
            const roles = await Rolmodel.getallRol();
            res.json(roles);
        } catch (error) {
            console.log(error);
        }
        
    },

    getRol: async (req, res) => {
        try {
            const { id_rol } = req.params;
            const rol = await Rolmodel.getRol(id_rol);
            res.json(rol);
        } catch (error) {
            console.log(error);
        }
    },

    createRol: async (req, res) => {
        try {
            const rol = await Rolmodel.createRol(req, res);
            res.json(rol);
        } catch (error) {
            console.log(error);
        }
    },
    
    updateRol: async (req, res) => {
        try {
            const rol = await Rolmodel.updateRol(req, res);
            res.json(rol);
        } catch (error) {
            console.log(error);
        }
    },

    deleteRol: async (req, res) => {
        try {
            const rol = await Rolmodel.deleteRol(req, res);
            res.json(rol);
        } catch (error) {
            console.log(error);
        }
    }
}
