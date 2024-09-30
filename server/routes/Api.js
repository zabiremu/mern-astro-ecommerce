import express from "express";
import * as AuthController from "../app/controllers/AuthController.js";
import { BrandList } from "../app/controllers/BrandController.js";
import { CategoryList } from "../app/controllers/CategoryController.js";
import { SliderList } from "../app/controllers/SliderController.js";

const router = express.Router();
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/brand-list", BrandList);
router.get("/category-list", CategoryList);
router.get("/slider-list", SliderList);
export default router;
