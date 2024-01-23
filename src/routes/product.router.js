import express from "express";
const router = express.Router();
import productController from "../controllers/product.controller.js";
import upload from "../middlewares/upload.js";

router.post("/", upload, productController.createProduct);
router.get("/", productController.getAllProducts);

export default router;