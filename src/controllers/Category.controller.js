import { Categorymodel } from "../model/category.model.js";

export const CategoryController = {
    getallCategory: async (req, res) => {
        const category = await Categorymodel.getallCategory();
        res.json(category);
    },
    getCategory: async (req, res) => {
        const { id_category } = req.params;
        const category = await Categorymodel.getCategory(id_category);
        res.json(category);
    },

    createCategory: async (req, res) => {
        const category = await Categorymodel.createCategory(res);
        res.json(category);
    },
    
    updateCategory: async (req, res) => {
        const { id_category } = req.params;
        const { category_name } = req.body;
        const category = await Categorymodel.updateCategory(id_category, category_name);
        res.json(category);
    },

    deleteCategory: async (req, res) => {
        const { id_category } = req.params;
        const category = await Categorymodel.deleteCategory(id_category);
        res.json(category);
    }
}
    
