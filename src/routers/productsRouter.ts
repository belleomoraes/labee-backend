import express from 'express';
import { getAllProducts, getFilteredProduct, removeProductStock, deleteProduct, insertProduct } from "../controllers/productsController.js";
import { checkBrandExistance, checkTypeExistance, validateProductSchema } from '../middlewares/productsMiddleware.js';

const router = express.Router();

router.get('/', getAllProducts)
router.post('/', validateProductSchema, checkBrandExistance, checkTypeExistance, insertProduct)
router.get('/products/:productType', getFilteredProduct)
router.post('/products', removeProductStock)
router.delete('/products', deleteProduct)


export default router;