import { Router } from "express";
import { ProductController } from "../controllers/Product.controller.js";
import BodyParser from 'body-parser';

export const router = Router();
router.use(BodyParser.json());
router.get("/", ProductController.getallProducts);
router.get("/:id_product", ProductController.getProduct);
router.post("/", ProductController.createProduct);
router.put("/:id_product", ProductController.updateProduct);
router.delete("/:id_product", ProductController.deleteProduct)