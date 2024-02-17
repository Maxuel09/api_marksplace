import { Router } from "express";
import { CategoryController } from "../controllers/Category.controller.js";
import BodyParser from 'body-parser';


export const router = Router();

router.use(BodyParser.json());
router.get("/", CategoryController.getallCategory);
router.get("/:id_category", CategoryController.getCategory);
router.post("/", CategoryController.createCategory);
router.put("/:id_category", CategoryController.updateCategory);
router.delete("/:id_category", CategoryController.deleteCategory);
