import { ProductModel } from "../model/Product.model.js";

export const ProductController = {

    getallProducts: async (req, res) => {
        try {
            const products = await ProductModel.getallProducts();
            res.json(products);
        } catch (error) {
            console.log(error);
        }
    },

    getProduct: async (req, res) => {
        try {
            const { id_product } = req.params;
            const product = await ProductModel.getProduct(id_product);
            res.json(product);
        } catch (error) {
            console.log(error);
        }
    },

    createProduct: async (req, res) => {
        try {
            const product = await ProductModel.createProduct(req, res);
            res.json(product);
        } catch (error) {
            console.log(error);
        }
    },

    updateProduct: async (req, res) => {
        try {
            const product = await ProductModel.updateProduct(req, res);
            res.json(product);
        } catch (error) {
            console.log(error);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await ProductModel.deleteProduct(req, res);
            res.json(product);
        } catch (error) {
            console.log(error);
        }
    }
}



