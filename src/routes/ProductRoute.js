import express from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get("/products", ProductController.list);
router.post("/products", ProductController.create);
router.get("/products/:_id", ProductController.find);

export default router;
