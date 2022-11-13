import express from 'express';
import { getAllProducts, getFilteredProduct } from "../controllers/productsController.js";


const router = express.Router();

router.get('/', getAllProducts)
router.get('/products/:productType', getFilteredProduct )


export default router;