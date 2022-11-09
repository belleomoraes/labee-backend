import express from 'express';
import { getFilteredProduct } from "../controllers/productsController.js";


const router = express.Router();

router.get('/product', getFilteredProduct)


export default router;