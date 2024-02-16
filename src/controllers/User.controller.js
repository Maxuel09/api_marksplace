import { Usermodel } from "../model/user.model.js";

export const UserController = {
    getallUsers: async (req, res) => {
        try {
            const users = await Usermodel.getallUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
        }

    },

    getUser: async (req, res) => {
        try {
            const { id_user } = req.params;
            const user = await Usermodel.getUser(id_user);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await Usermodel.createUser(req, res);
            res.json(user);
      }catch(error) {
        console.log(error);
      }
    },

    updateUser: async (req, res) => {
        try {
            const { id_user } = req.params;
            const data = req.body;
            const user = await Usermodel.updateUser(id_user, data);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id_user } = req.params;
            const user = await Usermodel.deleteUser(id_user);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    }
}
